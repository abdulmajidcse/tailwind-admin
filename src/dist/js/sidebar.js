function matchMediaForSidebar(width) {
  if (width.matches) {
    // in lg screen
    Alpine.store("sidebar").openIs = true;
  } else {
    // in less than lg screen
    Alpine.store("sidebar").openIs = false;
  }
}

const windowWidthLg = window.matchMedia("(min-width: 1024px)");
windowWidthLg.addListener(matchMediaForSidebar);

window.addEventListener("load", function () {
  matchMediaForSidebar(windowWidthLg);
});
