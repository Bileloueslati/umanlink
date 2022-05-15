(function () {
  document.addEventListener("turbo:load", () => {
    let lastScroll = 0;

    const headerEl = document.querySelector("header")!;

    document.addEventListener("scroll", () => {
      const currentScroll = window.scrollY;

      if (currentScroll < 200) {
        headerEl.classList.remove("-translate-y-full");
        return;
      }

      if (lastScroll > currentScroll) {
        headerEl.classList.remove("-translate-y-full");
      } else {
        headerEl.classList.add("-translate-y-full");
      }

      lastScroll = currentScroll;
    });
  });
})();

export {};
