const regEx = {
  name: /^[A-Za-z\-]{2,100}$/,
  aboutMe: /^[A-Za-z\-]{2,20}$/,
  placeName: /^[A-Za-z\-]{3,20}$/,
  link: /^https?:\/\//,
  updateAvatar: /^https?:\/\//,
};

export class FormValidator {
  constructor(objToValidate) {
    this._formSelector = objToValidate.formSelector;
    this._inputSelector = objToValidate.inputSelector;
    this._submitButtonSelector = objToValidate.submitButtonSelector;
    this._inactiveButtonClass = objToValidate.inactiveButtonClass;
    this._inputErrorClass = objToValidate.inputErrorClass;
    this._errorClass = objToValidate.errorClass;
  }

  //termina el constructor

  switchingInput(evt) {
    switch (evt.target.name) {
      case "name":
      
        this._checkInputValidity(regEx.name, evt.target, this._formSelector);
        break;
      case "about-me":
      
        this._checkInputValidity(regEx.aboutMe, evt.target, this._formSelector);
        break;
      case "placeName":
        this._checkInputValidity(
          regEx.placeName,
          evt.target,
          this._formSelector
        );
        break;
      case "link":
     
        this._checkInputValidity(regEx.link, evt.target, this._formSelector);
        break;
      case "updateAvatar":
       
        this._checkInputValidity(
          regEx.updateAvatar,
          evt.target,
          this._formSelector
        );
        break;
    }
  }

  _checkInputValidity(expresion, inputElement, formID) {
    const formElement = document.getElementById(formID);
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    const btnElement = formElement.querySelector(this._submitButtonSelector);
    if (expresion.test(inputElement.value)) {
      errorElement.classList.remove(this._errorClass);
      inputElement.classList.remove(this._inputErrorClass);
      errorElement.textContent = "";
    } else {
      errorElement.textContent = inputElement.validationMessage;
      errorElement.classList.add(this._errorClass);
      inputElement.classList.add(this._inputErrorClass);
    }
  }

  // termina check show error

  // is valid

  _hasInvalidInput(formID) {
    const formElement = document.getElementById(formID);
    const inputsList = Array.from(
      formElement.querySelectorAll(this._inputSelector)
    );
    return inputsList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  // toggleBtn

  toggleBtnState(formID) {
    const formElement = document.getElementById(formID);
    const btnElement = formElement.querySelector(this._submitButtonSelector);
    if (this._hasInvalidInput(formID)) {
      btnElement.classList.add(this._inactiveButtonClass);
      btnElement.setAttribute("disabled", true);
    } else {
      btnElement.classList.remove(this._inactiveButtonClass);
      btnElement.removeAttribute("disabled", false);
    }
  }

  //prueba enable validation

  setEventListeners() {
    const formElement = document.getElementById(this._formSelector);
    const inputsList = Array.from(
      formElement.querySelectorAll(this._inputSelector)
    );
    inputsList.forEach((inputElement) => {
      inputElement.addEventListener("input", (evt) => {
        evt.stopImmediatePropagation();
        this.switchingInput(evt);
        this.toggleBtnState(this._formSelector);
      });
    });
    this.toggleBtnState(this._formSelector);
  }
}

//termina objeto

//  prueba Para Profile form

//Proyecto 8
