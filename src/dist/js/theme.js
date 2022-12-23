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

  const themeMenu = document.getElementById("theme_menu");

  if (localStorage.getItem("theme") == "system") {
    themeMenu.innerHTML = `<i class="fas fa-adjust"></i> System`;

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      switchThemeStyles("dark");
    } else {
      switchThemeStyles("light");
    }
  } else if (localStorage.getItem("theme") === "dark") {
    themeMenu.innerHTML = `<i class="fas fa-moon"></i> Dark`;
    switchThemeStyles("dark");
  } else {
    themeMenu.innerHTML = `<i class="fas fa-sun"></i> Light`;
    switchThemeStyles("light");
  }
}

// when page load
window.addEventListener("load", function () {
  setTheme();
});
