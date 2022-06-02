import "./style/app.scss";

import * as Turbo from "@hotwired/turbo";

import AOS from "aos";

import LazyImage from "./js/img_lazy_load";

import lightGalery from "lightgallery";

import lgThumbnail from 'lightgallery/plugins/thumbnail';

import lgZoom from 'lightgallery/plugins/zoom';

require("./js/swiper");

require("./js/img_lazy_load");

require("./js/navbar");

require("./js/accordion");

require("./js/form_validation");

require("./js/modal");

require("./js/job_filter");

require("./js/job_form");

require("./js/video_player");

require("./js/off_canvas");

document.addEventListener("turbo:load", (e) => {
  LazyImage();
  const galleryEl = document.getElementById("gallery");
  if (galleryEl) {
    lightGalery(galleryEl, {
      plugins: [lgZoom, lgThumbnail],
      thumbnail: true,
      download: false
    });
  }
});

AOS.init({
  easing: "ease-out-back",
  duration: 1000,
  startEvent: "turbo:load",
  once: true
});
