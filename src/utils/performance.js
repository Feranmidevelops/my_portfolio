
// client/src/utils/performance.js
export const measurePageLoad = () => {
  if (window.performance) {
    window.addEventListener('load', () => {
      const perfData = window.performance.timing;
      const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
      console.log(`Page load time: ${pageLoadTime}ms`);
      
      // Send to analytics
      if (window.gtag) {
        gtag('event', 'timing_complete', {
          name: 'load',
          value: pageLoadTime,
          event_category: 'Performance'
        });
      }
    });
  }
};