
// Google Analytics 4
export const initGA = () => {
  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_GA_ID}`;
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', process.env.REACT_APP_GA_ID);
};

export const logPageView = (path) => {
  if (window.gtag) {
    window.gtag('config', process.env.REACT_APP_GA_ID, {
      page_path: path
    });
  }
};

export const logEvent = (action, category, label, value) => {
  if (window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }
};