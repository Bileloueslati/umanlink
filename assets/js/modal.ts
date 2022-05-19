document.addEventListener("turbo:load", () => {
  const modalHiddenEvent = new Event("modal-hidden");

  const modalShowEvent = new Event("modal-show");

  const handleVisiblity = (action: "show" | "hide", modal: HTMLElement) => {
    if (action === "show") {
      document.body.style.overflow = "hidden";
      modal.classList.add("show");
      modal.dispatchEvent(modalShowEvent);
    } else {
      document.body.style.removeProperty("overflow");
      modal.classList.remove("show");
      modal.dispatchEvent(modalHiddenEvent);
    }
  };

  document
    .querySelectorAll<HTMLButtonElement>("[data-toggle=modal]")
    .forEach((btn) => {
      const target = btn.dataset.target;

      if (target) {
        const modal = document.getElementById(target);

        if (modal) {
          btn.addEventListener("click", () => {
            handleVisiblity("show", modal);
          });
        }
      }
    });

  document.querySelectorAll<HTMLElement>(".modal").forEach((modal) => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("show")) {
        handleVisiblity("hide", modal);
      }
    });

    const closeBtn = modal.querySelector(".close");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        handleVisiblity("hide", modal);
      });
    }
  });
});

export {};
