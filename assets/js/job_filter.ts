document.addEventListener("turbo:load", () => {
  const select = document.getElementById("job_filter");

  const jobs = document.querySelectorAll<HTMLElement>(".job");

  if (select) {
    select.addEventListener("change", (e: Event) => {
      const { value: entity } = e.target as HTMLSelectElement;

      jobs.forEach((job) => {
        const target = job.dataset.entity;

        if (target === entity || entity === "all") {
          job.style.display = "flex";
        } else {
          job.style.display = "none";
        }
      });
    });
  }
});

export {};
