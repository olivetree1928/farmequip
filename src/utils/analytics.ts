// 百度统计工具函数
// 按照官方建议，这里是去掉script标签后的JS代码

declare global {
  interface Window {
    _hmt: any[];
  }
}

/**
 * 发送页面访问统计
 * @param page 页面路径，默认为当前路径
 */
export const trackPageView = (page?: string) => {
  if (typeof window !== 'undefined' && window._hmt) {
    const pagePath = page || window.location.pathname;
    window._hmt.push(['_trackPageview', pagePath]);
  }
};

/**
 * 发送事件统计
 * @param category 事件类别
 * @param action 事件操作
 * @param label 事件标签（可选）
 * @param value 事件值（可选）
 */
export const trackEvent = (
  category: string, 
  action: string, 
  label?: string, 
  value?: number
) => {
  if (typeof window !== 'undefined' && window._hmt) {
    const eventData = ['_trackEvent', category, action];
    if (label) eventData.push(label);
    if (value !== undefined) eventData.push(value);
    window._hmt.push(eventData);
  }
};

/**
 * 发送设备点击统计
 * @param equipmentName 设备名称
 * @param category 设备分类
 */
export const trackEquipmentClick = (equipmentName: string, category: string) => {
  trackEvent('Equipment', 'Click', `${category}-${equipmentName}`);
};

/**
 * 发送搜索统计
 * @param searchQuery 搜索关键词
 * @param resultCount 搜索结果数量
 */
export const trackSearch = (searchQuery: string, resultCount: number) => {
  trackEvent('Search', 'Query', searchQuery, resultCount);
};

/**
 * 发送分类筛选统计
 * @param category 选择的分类
 */
export const trackCategoryFilter = (category: string) => {
  trackEvent('Filter', 'Category', category);
};