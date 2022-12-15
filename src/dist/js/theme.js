// theme style switch
function switchThemeStyles(theme) {
  if (theme == "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

// set theme
function setTheme(theme) {
  if (theme) {
    localStorage.setItem("theme", theme);
  } else if (!localStorage.getItem("theme")) {
    localStorage.setItem("theme", "system");
  }

  // all theme icon button hidden
  document.querySelectorAll(".theme-icon").forEach((themeIcon) => {
    themeIcon.classList.add("hidden");
  });

  if (localStorage.getItem("theme") == "system") {
    document.getElementById("switch_to_dark_theme").classList.remove("hidden");

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      switchThemeStyles("dark");
    } else {
      switchThemeStyles("light");
    }
  } else if (localStorage.getItem("theme") === "dark") {
    document.getElementById("switch_to_light_theme").classList.remove("hidden");
    switchThemeStyles("dark");
  } else {
    document
      .getElementById("switch_to_system_theme")
      .classList.remove("hidden");
    switchThemeStyles("light");
  }
}

// when page load
window.addEventListener("load", function () {
  setTheme();
});
