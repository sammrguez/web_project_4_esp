//Validacion de formulario

const showError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(enableObject.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(enableObject.errorClass);
};

const hideError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(enableObject.inputErrorClass);
  errorElement.classList.remove(enableObject.errorClass);
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
    btnElement.classList.add(enableObject.inactiveButtonClass);
  } else {
    btnElement.classList.remove(enableObject.inactiveButtonClass);
  }
};
//Event Listeners

const setEventListeners = (formElement) => {
  const inputsList = Array.from(
    formElement.querySelectorAll(enableObject.inputSelector)
  );
  const btnElement = formElement.querySelector(
    enableObject.submitButtonSelector
  );
  toggleBtnState(inputsList, btnElement);
  inputsList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
      toggleBtnState(inputsList, btnElement);
    });
  });
};

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

// habilitar la validación llamando a enableValidation()
// pasar todas las configuraciones en la llamada

const enableValidation = (object) => {
  const formsList = Array.from(
    document.querySelectorAll(enableObject.formSelector)
  );
  console.log(formsList);
  formsList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement);
  });
};
validationObject = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit-button",
  inactiveButtonClass: "form__submit-button_inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
};

const enableObject = validationObject;
enableValidation(validationObject);
