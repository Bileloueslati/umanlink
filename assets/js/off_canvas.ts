document.addEventListener("turbo:load", () => {
  document
    .querySelectorAll<HTMLButtonElement>('[data-canvas-toggle="offcanvas"]')
    .forEach((btn) => {
      const { canvasTarget } = btn.dataset;

      if (canvasTarget) {
        const canvasEl = document.querySelector<HTMLDivElement>(
          `#${canvasTarget}`
        );
        if (canvasEl) {
          btn.addEventListener("click", () => {
            canvasEl.classList.add("show");
            document.body.style.overflow = "hidden";
          });

          const closeBtn =
            canvasEl.querySelector<HTMLButtonElement>(".btn-close")!;

          closeBtn.addEventListener("click", () => {
            canvasEl.classList.remove("show");
            document.body.style.removeProperty("overflow");
          });
        }
      }
    });
});

export {};
