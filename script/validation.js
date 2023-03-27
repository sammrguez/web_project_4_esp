//Validacion de formulario

const showError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add("form__input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("form__input-error_active");
};

const hideError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("form__input_type_error");
  errorElement.classList.remove("form__input-error_active");
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideError(formElement, inputElement);
  }
};

const hasInvalidInput = (inputsList) => {
  return inputsList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

//habilitando y desabilitando submit
const toggleBtnState = (inputsList, btnElement) => {
  if (hasInvalidInput(inputsList)) {
    btnElement.classList.add("form__submit-button_inactive");
  } else {
    btnElement.classList.remove("form__submit-button_inactive");
  }
};
//Event Listeners

const setEventListeners = (formElement) => {
  const inputsList = Array.from(formElement.querySelectorAll(".form__input"));
  const btnElement = formElement.querySelector(".form__submit-button");
  toggleBtnState(inputsList, btnElement);
  inputsList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
      toggleBtnState(inputsList, btnElement);
    });
  });
};

const enableValidation = () => {
  const formsList = Array.from(document.querySelectorAll(".form"));
  formsList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement);
  });
};

enableValidation();

//cerrando forms
const closeFromEsc = (popup) => {
  document.addEventListener("keydown", function (evt) {
    if (evt.key === "Escape") {
      popup.classList.remove("popup_opened");
    }
  });
};

const closeForms = () => {
  const popups = Array.from(document.querySelectorAll(".popup"));
  popups.forEach((popup) => {
    popup.addEventListener("click", function (evt) {
      const popup = evt.target;
      popup.classList.remove("popup_opened");
      evt.stopImmediatePropagation();
    });
    closeFromEsc(popup);
  });
};

closeForms();
