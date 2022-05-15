document.addEventListener("turbo:load", () => {
  const jobList = document.getElementById("job_list");

  if (jobList) {
    jobList.querySelectorAll("button").forEach((btn) => {
      btn.addEventListener("click", () => {
        const job = btn.closest<HTMLElement>(".job");

        const modal = document.getElementById("modal");

        if (job && modal) {
          const jobDetails = ["job_title", "entity", "location", "time"];

          jobDetails.forEach((item) => {
            const detail = job.querySelector(`.${item}`)?.textContent!;

            const modalTarget = modal.querySelector(`#${item}`)!;

            modalTarget.innerHTML = detail;
          });
        }
      });
    });
  }
});

export {};
