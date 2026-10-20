// Runs in <head>, before the page paints, so a visitor who chose the dark
// theme never sees a flash of the light one. A separate file rather than an
// inline script, because the CSP only allows scripts from this site.
//
// It also marks visitors who last picked the IT track: the prerendered HTML
// is the Software track, so their page stays hidden (see globals.css) until
// the app has drawn the IT one and RoleProvider removes the mark.
(function () {
  try {
    var theme = localStorage.getItem("theme");
    if (theme === "dark" || theme === "light") {
      document.documentElement.setAttribute("data-theme", theme);
    }
    if (localStorage.getItem("role") === "it") {
      document.documentElement.classList.add("role-pending");
    }
  } catch (e) {
    /* storage blocked: the light default stands */
  }
})();
