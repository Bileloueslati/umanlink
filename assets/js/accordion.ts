(function () {
  document.addEventListener("turbo:load", () => {
    const toggle = (currentItem: HTMLElement) => {
      const accordion = currentItem.closest<HTMLElement>(".accordion")!;

      accordion.querySelectorAll(".item").forEach((item) => {
        const icon = item.querySelector(".fa")!;

        const body = item.querySelector<HTMLElement>(".body")!;

        if (item !== currentItem) {
          item.classList.remove("active");
          body.style.opacity = "0";
          icon.classList.add("fa-plus");
          icon.classList.remove("fa-minus");
          body.setAttribute("aria-expanded", "false");
        } else {
          item.classList.add("active");
          icon.classList.add("fa-minus");
          icon.classList.remove("fa-plus");
          body.style.opacity = "1";
          body.setAttribute("aria-expanded", "true");
        }
      });
    };

    const handleClick = (e: MouseEvent) => {
      const btn = e.target as HTMLElement;

      const currentItem = btn.closest<HTMLElement>(".item")!;

      toggle(currentItem);
    };

    document.querySelectorAll(".accordion").forEach((accordion) => {
      const items = accordion.querySelectorAll<HTMLElement>(".item");

      items.forEach((item, i) => {
        const header = item.querySelector<HTMLElement>(".header")!;
        header.addEventListener("click", handleClick);
        if (i === 0) {
          toggle(item);
        }
      });
    });
  });
})();

export {};
