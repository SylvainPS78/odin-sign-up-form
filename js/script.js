const submitButton = document.querySelector(".form__button");

const confirmPasswordCheck = () => {
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirm_password");
  const errorMessageConfirmPassword = document.getElementById(
    "confirm_password-error"
  );

  if (password.value !== confirmPassword.value) {
    errorMessageConfirmPassword.textContent = "Passwords do not match";
    errorMessageConfirmPassword.style.visibility = "visible";
    confirmPassword.setAttribute("aria-invalid", "true");
    confirmPassword.setAttribute("data-invalid", "true");
  } else {
    errorMessageConfirmPassword.style.visibility = "hidden";
    confirmPassword.removeAttribute("aria-invalid");
    confirmPassword.removeAttribute("data-invalid");
    confirmPassword.style.borderColor = "";
    confirmPassword.style.boxShadow = "";
  }
};

const errorMessageDisplay = () => {
  const formInputs = document.querySelectorAll("input");
  const redBorder = "#e63946";

  formInputs.forEach((input) => {
    const inputName = input.name;
    const inputValue = input.value;
    const errorMessage = document.getElementById(`${inputName}-error`);

    if (!inputValue) {
      errorMessage.textContent = `This field is required`;
      errorMessage.style.visibility = "visible";
      input.setAttribute("aria-invalid", "true");
      input.style.borderColor = redBorder;
      input.style.boxShadow = `1px 1px 4px 0 ${redBorder}`;
    } else if (!input.checkValidity()) {
      switch (inputName) {
        case "first_name":
          errorMessage.textContent = "Please enter a valid first name";
          break;
        case "last_name":
          errorMessage.textContent = "Please enter a valid last name";
          break;
        case "email":
          errorMessage.textContent = "Please enter a valid email address";
          break;
        case "phone_number":
          errorMessage.textContent = "Please enter a valid phone number";
          break;
        case "password":
          errorMessage.textContent =
            "Password must be at least 8 characters long";
          break;
        default:
          errorMessage.textContent = `${inputName} is invalid`;
      }
      errorMessage.style.visibility = "visible";
      input.setAttribute("aria-invalid", "true");
      input.style.borderColor = redBorder;
      input.style.boxShadow = `1px 1px 4px 0 ${redBorder}`;
    } else if (inputName === "confirm_password") {
      confirmPasswordCheck();
    } else {
      errorMessage.style.visibility = "hidden";
      input.removeAttribute("aria-invalid");
      input.style.borderColor = "";
      input.style.boxShadow = "";
    }
  });
};

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  errorMessageDisplay();
});
