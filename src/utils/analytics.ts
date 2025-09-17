// Google Analytics GA4 工具函数
// 使用现代化的gtag API

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

/**
 * 发送页面访问统计
 * @param page 页面路径，默认为当前路径
 */
export const trackPageView = (page?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    const pagePath = page || window.location.pathname;
    window.gtag('config', 'G-S8RQ2E295P', {
      page_path: pagePath,
    });
  }
};

/**
 * 发送自定义事件统计
 * @param eventName 事件名称
 * @param parameters 事件参数
 */
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

/**
 * 发送设备点击统计
 * @param equipmentName 设备名称
 * @param category 设备分类
 */
export const trackEquipmentClick = (equipmentName: string, category: string) => {
  trackEvent('equipment_click', {
    equipment_name: equipmentName,
    equipment_category: category,
    event_category: 'engagement',
    event_label: `${category}-${equipmentName}`,
  });
};

/**
 * 发送搜索统计
 * @param searchQuery 搜索关键词
 * @param resultCount 搜索结果数量
 */
export const trackSearch = (searchQuery: string, resultCount: number) => {
  trackEvent('search', {
    search_term: searchQuery,
    result_count: resultCount,
    event_category: 'engagement',
  });
};

/**
 * 发送分类筛选统计
 * @param category 选择的分类
 */
export const trackCategoryFilter = (category: string) => {
  trackEvent('category_filter', {
    filter_category: category,
    event_category: 'navigation',
    event_label: category,
  });
};

/**
 * 发送图片查看统计
 * @param equipmentName 设备名称
 * @param category 设备分类
 */
export const trackImageView = (equipmentName: string, category: string) => {
  trackEvent('image_view', {
    equipment_name: equipmentName,
    equipment_category: category,
    event_category: 'engagement',
    event_label: `view_${equipmentName}`,
  });
};

/**
 * 发送技术分析展开统计
 * @param equipmentName 设备名称
 * @param expanded 是否展开
 */
export const trackTechnicalAnalysis = (equipmentName: string, expanded: boolean) => {
  trackEvent('technical_analysis', {
    equipment_name: equipmentName,
    action: expanded ? 'expand' : 'collapse',
    event_category: 'engagement',
  });
};