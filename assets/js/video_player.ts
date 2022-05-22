import videojs from "video.js";

document.addEventListener("turbo:load", () => {
  const elements = document.querySelectorAll<HTMLElement>(".video_player");

  elements.forEach((el) => {
    const video = videojs(el, {
      controls: false,
      preload: "auto",
      language: "fr",
      muted: true,
      fill: true
    });

    const playBtn = document.querySelector(".video_play");

    if (playBtn) {
      playBtn.addEventListener("click", () => {
        const elInner = el.closest<HTMLDivElement>(".inner");

        if (elInner) {
          elInner.style.display = "block";
        }

        video.play();
      });
    }
  });
});

export {};
