export default function LazyImage() {
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
            imageObserver.unobserve(image);
          }
        }
      });
    });

    images.forEach((img) => imageObserver.observe(img));
  }
}
