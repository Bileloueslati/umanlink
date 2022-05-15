import JustValidate from "just-validate";
enum Rules {
  Required = "required",
  Email = "email",
  MinLength = "minLength",
  MaxLength = "maxLength",
  Password = "password",
  Number = "number",
  MaxNumber = "maxNumber",
  MinNumber = "minNumber",
  StrongPassword = "strongPassword",
  CustomRegexp = "customRegexp",
  MinFilesCount = "minFilesCount",
  MaxFilesCount = "maxFilesCount",
  Files = "files",
}

document.addEventListener("turbo:load", () => {
  const validate = new JustValidate("#form", {
    errorFieldCssClass: "is-invalid",
    errorLabelStyle: {
      fontSize: "13px",
      color: "#dc3545",
    },
    focusInvalidField: true,
  });

  validate
    .addField("#fullname", [
      {
        rule: Rules.Required,
      },
    ])

    .addField("#email", [
      {
        rule: Rules.Required,
      },
      {
        rule: Rules.Email,
      },
    ])

    .onSuccess((e) => {
      validate.destroy();

      // e?.preventDefault();

      const form = e?.target as HTMLFormElement;

      const btn = form.querySelector<HTMLElement>("#submit-btn");

      if (btn) {
        form.requestSubmit(btn);
      }
    });
});

export {};
