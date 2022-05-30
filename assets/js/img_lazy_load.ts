document.addEventListener("turbo:load", () => {
  const images = Array.from<HTMLImageElement>(
    document.querySelectorAll(".lazy-image")
  );

  if ("IntersectionObserver" in window) {
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
         
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const image = entry.target as HTMLImageElement;

          const { src } = image.dataset;

          if (src) {
            image.src = src;

            image.onload = () => image.previousElementSibling?.remove();

            imageObserver.unobserve(image);
          }
        }
      });
    });

    images.forEach((img) => imageObserver.observe(img));
  }
});

export {};
