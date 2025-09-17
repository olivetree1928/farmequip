import { useEffect } from 'react';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

const GoogleAnalytics: React.FC = () => {
  useEffect(() => {
    // 初始化Google Analytics
    const initGoogleAnalytics = () => {
      // 检查是否已经加载过脚本
      if (document.querySelector('script[src*="googletagmanager.com/gtag/js"]')) {
        return;
      }

      // Google Analytics GA4 代码 - 按照官方要求
      
      // 1. 加载gtag.js脚本
      const gtagScript = document.createElement('script');
      gtagScript.async = true;
      gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-S8RQ2E295P';
      document.head.appendChild(gtagScript);

      // 2. 初始化dataLayer和gtag函数
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      window.gtag = gtag;

      // 3. 配置GA4
      gtag('js', new Date());
      gtag('config', 'G-S8RQ2E295P');
    };

    // 页面加载完成后初始化
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initGoogleAnalytics);
    } else {
      initGoogleAnalytics();
    }

    // 清理事件监听器
    return () => {
      document.removeEventListener('DOMContentLoaded', initGoogleAnalytics);
    };
  }, []);

  // 页面访问跟踪 - 用于SPA页面切换
  useEffect(() => {
    const trackPageView = () => {
      if (window.gtag) {
        // 发送页面访问统计
        window.gtag('config', 'G-S8RQ2E295P', {
          page_path: window.location.pathname,
        });
      }
    };

    // 延迟执行以确保统计脚本已加载
    const timer = setTimeout(trackPageView, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  // 这个组件不渲染任何内容
  return null;
};

export default GoogleAnalytics;