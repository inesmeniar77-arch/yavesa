(function () {
  var stored = localStorage.getItem("yavesa-theme");
  var theme = stored || "light";
  document.documentElement.setAttribute("data-theme", theme);
})();
