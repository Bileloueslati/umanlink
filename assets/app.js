import "./style/app.scss";

import * as Turbo from "@hotwired/turbo";

require("./js/swiper");

require("./js/navbar");

require("./js/accordion");

require("./js/form_validation");

require("./js/modal");

require("./js/job_filter");

require("./js/job_form");

require("./js/video_player");

require("./js/off_canvas");

document.addEventListener("turbo:before-render", function(e) {
      
    console.log("before cache", e);
  })