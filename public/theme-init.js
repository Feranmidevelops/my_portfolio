// Runs in <head>, before the page paints, so a visitor who chose the dark
// theme never sees a flash of the light one. A separate file rather than an
// inline script, because the CSP only allows scripts from this site.
(function () {
  try {
    var theme = localStorage.getItem("theme");
    if (theme === "dark" || theme === "light") {
      document.documentElement.setAttribute("data-theme", theme);
    }
  } catch (e) {
    /* storage blocked: the light default stands */
  }
})();
