const regEx = {
  name: /^[A-Za-z\-]{2,40}$/,
  aboutMe: /^[A-Za-z\-]{2,20}$/,
  placeName: /^[A-Za-z\-]{4,20}$/,
  photoLink: /^[A-Za-z\-]{4,500}$/,
};

validationObject = {
  formSelector: "profile",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit-button",
  inactiveButtonClass: "form__submit-button_inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
};

validationObject2 = {
  formSelector: "place",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit-button",
  inactiveButtonClass: "form__submit-button_inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
};

class FormValidator {
  constructor(objToValidate, evt) {
    this._formSelector = objToValidate.formSelector;
    this._inputSelector = objToValidate.inputSelector;
    this._submitButtonSelector = objToValidate.submitButtonSelector;
    this._inactiveButtonClass = objToValidate.inactiveButtonClass;
    this._inputErrorClass = objToValidate.inputErrorClass;
    this._errorClass = objToValidate.errorClass;
    this._evento = evt;
  }
}

//termina constructor
function switchingInput(evt) {
  switch (evt.target.name) {
    case "name":
      checkInputValidity(regEx.name, evt.target, validationObject.formSelector);
      break;
    case "about-me":
      checkInputValidity(
        regEx.aboutMe,
        evt.target,
        validationObject.formSelector
      );
      break;
    case "place-name":
      checkInputValidity(
        regEx.placeName,
        evt.target,
        validationObject2.formSelector
      );
      break;
    case "photo-link":
      checkInputValidity(
        regEx.photoLink,
        evt.target,
        validationObject2.formSelector
      );
      break;
  }
}
//const formElement = document.getElementById("profile");
//console.log(formElement);
//checkinput
function checkInputValidity(expresion, inputElement, formID) {
  const formElement = document.getElementById(formID);

  if (expresion.test(inputElement.value)) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

    errorElement.classList.remove(validationObject.errorClass);

    errorElement.textContent = "";
    inputElement.classList.remove(validationObject.inputErrorClass);
  } else {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(validationObject.errorClass);
    inputElement.classList.add(validationObject.inputErrorClass);
  }
}

function addEvent() {
  const inputs = Array.from(document.querySelectorAll("form__input"));
  console.log(inputs);
  inputs.forEach((input) => {
    input.addEventListener("input", (evt) => {
      switchingInput(evt);
    });
  });
}
// termina obj

function addEvent() {
  const inputs = Array.from(document.querySelectorAll("form__input"));
  console.log(inputs);
  inputs.forEach((input) => {
    input.addEventListener("input", (evt) => {
      switchingInput(evt);
      isValid(validationObject.formSelector);
    });
  });
}

// forms
const formList = Array.from(document.querySelectorAll(".form"));

formList.forEach((form) => {
  form.addEventListener("submit", (evt) => {
    evt.preventDefault();
  });
});

const inputs = Array.from(document.querySelectorAll(".form__input"));
//console.log(inputs);
inputs.forEach((input) => {
  input.addEventListener("keyup", switchingInput);
});

let valid = "";

function isValid(formID) {
  const formElement = document.getElementById(formID);
  const inputsList = Array.from(
    formElement.querySelectorAll(validationObject.inputSelector)
  );
  console.log(inputsList);

  if (
    inputsList.every((inputElement) => {
      return inputElement.validity.valid;
    })
  ) {
    console.log("ambos activvos");
    valid = true;
  } else {
    console.log("slguno inactivvos");
    valid = false;
  }
}
function toggleBtnState(formID) {
  const formElement = document.getElementById(formID);
  const btnElement = formElement.querySelector(
    validationObject.submitButtonSelector
  );
  isValid(formID);
  if (valid === true) {
    console.log(valid);
    btnElement.classList.remove(validationObject.inactiveButtonClass);
  } else {
    console.log(valid);
    btnElement.classList.add(validationObject.inactiveButtonClass);
  }
}

const formElement = document.getElementById(validationObject.formSelector);
console.log(formElement);
const inputsList = Array.from(
  formElement.querySelectorAll(validationObject.inputSelector)
);
inputsList.forEach((input) => {
  input.addEventListener("input", () => {
    toggleBtnState(validationObject.formSelector);
  });
});
