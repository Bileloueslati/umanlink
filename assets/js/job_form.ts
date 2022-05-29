document.addEventListener("turbo:load", () => {
  const jobList = document.getElementById("job_list");

  const modal = document.getElementById("job_modal");

  const clearErrors = () => {
    modal?.querySelectorAll(".error").forEach((el) => el.remove());

    modal
      ?.querySelectorAll(".form-control")
      .forEach((el) => el.classList.remove("is-invalid"));
  };

  const jobForm = document.querySelector<HTMLFormElement>("#job_application");

  // fill modal body content

  if (jobList) {
    jobList.querySelectorAll("button").forEach((btn) => {
      btn.addEventListener("click", () => {
        const job = btn.closest<HTMLElement>(".job");

        if (job && modal) {
          const targets = ["job_title", "entity", "location", "time"];

          modal.addEventListener("modal-hidden", () => {
            if (jobForm) {
              jobForm.reset();
              clearErrors();
            }
          });

          targets.forEach((item) => {
            const { value } = job.querySelector<HTMLElement>(
              `[data-target="${item}"]`
            )!.dataset;

            if (value) {
              modal
                .querySelectorAll<HTMLDivElement | HTMLInputElement>(
                  `.${item}`
                )!
                .forEach((el) => {
                  if (el instanceof HTMLInputElement) {
                    el.value = value;
                  } else {
                    el.innerHTML = value;
                  }
                });
            }
          });
        }
      });
    });
  }

  if (jobForm) {
    jobForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      clearErrors();

      const submitBtn = jobForm.querySelector(
        'button[type="submit"]'
      ) as HTMLButtonElement;

      submitBtn.removeAttribute("disabled");

      submitBtn
        .querySelector<HTMLSpanElement>(".spinner")!
        .style.removeProperty("display");

      const formData = new FormData(jobForm);

      const file = jobForm.querySelector<HTMLInputElement>("#file")?.files?.[0];

      if (file) {
        formData.append("file", file);
      }

      const { action: url } = jobForm.dataset;

      if (url) {
        try {
          const res = await fetch(url, {
            method: "POST",
            body: formData,
          });

          const data = await res.json();

          if (!res.ok) {
            throw new Error(JSON.stringify(data));
          }

          if (modal) {
            const modalBody = modal.querySelector(".modal-body") as HTMLElement;
            const successMessage =
              modalBody.querySelector<HTMLDivElement>("#success_message")!;
            successMessage.style.removeProperty("display");
            modalBody.innerHTML = successMessage.innerHTML;
            setTimeout(() => {
              submitBtn.removeAttribute("disabled");
              modal.classList.remove("show");
              document.body.style.removeProperty("overflow");
            }, 4000);
          }
        } catch (e: any) {
          submitBtn.removeAttribute("disabled");
          submitBtn
            .querySelector<HTMLSpanElement>(".spinner")!
            .style.setProperty("display", "none");
          //  console.log("error", e.message);
          if (e instanceof Error) {
            const eObj: Record<string, string> = JSON.parse(e.message);

            Object.entries(eObj).forEach(([k, v]) => {
              const error = document.createElement("span");
              error.textContent = v;
              error.classList.add("error", "text-red-600");
              error.style.fontSize = "13px";
              if (modal) {
                const input = modal.querySelector<HTMLInputElement>(`#${k}`);
                input?.classList.add("is-invalid");
                input?.closest("div")?.appendChild(error);
              }
            });
          }
        }
      }
    });
  }
});

export {};
