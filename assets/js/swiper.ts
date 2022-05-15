import Swiper, { Navigation } from "swiper";

document.addEventListener("turbo:load", () => {
  document.querySelectorAll<HTMLInputElement>(".swiper").forEach((el) => {

    const { xs, lg, md } = el.dataset;

    const swiper = new Swiper(el, {
      loop: true,
      autoplay: true,
      slidesPerView: Number(lg) || 3,
      spaceBetween: 30,
      modules: [Navigation],
      navigation: {
        nextEl: ".swiper-next-button",
        prevEl: ".swiper-prev-button",
      },

      breakpoints: {
        320: {
          slidesPerView: Number(xs) || 2,
          spaceBetween: 20,
        },
        480: {
          slidesPerView: Number(xs) || 2,
          spaceBetween: 30,
        },
        720: {
          slidesPerView: Number(md) || 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: Number(lg) || 2,
          spaceBetween: 20,
        },
      },
    });
  });
});
