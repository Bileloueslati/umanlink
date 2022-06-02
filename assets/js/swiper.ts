import Swiper, { Navigation, SwiperOptions, Grid, Autoplay } from "swiper";

document.addEventListener("turbo:load", () => {
  document.querySelectorAll<HTMLInputElement>(".swiper").forEach((el) => {
    const { xs, lg, md, rows, autoplay, speed } = el.dataset;

    let options: SwiperOptions = {
      loop: true,
      slidesPerView: Number(lg) || 3,
      spaceBetween: Number(speed) || 3000,
      modules: [Navigation, Grid, Autoplay],
      speed: 2000,
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
    };

    if (rows && options.breakpoints) {
      options.breakpoints[1024].grid = {
        rows: Number(rows),
      };
    }

    if (autoplay) {
      options.autoplay = JSON.parse(autoplay);
    }

    const swiper = new Swiper(el, options);
  });
});
