import { useEffect } from 'react';

declare global {
  interface Window {
    _hmt: any[];
  }
}

const BaiduAnalytics: React.FC = () => {
  useEffect(() => {
    // 初始化百度统计
    const initBaiduAnalytics = () => {
      // 确保全局变量存在
      window._hmt = window._hmt || [];
      
      // 检查是否已经加载过脚本
      if (document.querySelector('script[src*="hm.baidu.com"]')) {
        return;
      }

      // 百度统计代码 - 按照官方建议去掉script标签
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?e8514badf1d76d459ab58a710fbed503";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
    };

    // 页面加载完成后初始化
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initBaiduAnalytics);
    } else {
      initBaiduAnalytics();
    }

    // 清理事件监听器
    return () => {
      document.removeEventListener('DOMContentLoaded', initBaiduAnalytics);
    };
  }, []);

  // 页面访问跟踪 - 用于SPA页面切换
  useEffect(() => {
    const trackPageView = () => {
      if (window._hmt) {
        // 发送页面访问统计
        window._hmt.push(['_trackPageview', window.location.pathname]);
      }
    };

    // 延迟执行以确保统计脚本已加载
    const timer = setTimeout(trackPageView, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  // 这个组件不渲染任何内容
  return null;
};

export default BaiduAnalytics;