const regEx = {
  name: /^[A-Za-z\-]{2,100}$/,
  aboutMe: /^[A-Za-z\-]{2,20}$/,
  placeName: /^[A-Za-z\-]{4,20}$/,
  link: /^[A-Za-z\-]{4,500}$/,
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
        // console.log(errorElement);
        break;
      case " aboutMe":
        this._checkInputValidity(regEx.aboutMe, evt.target, this._formSelector);
        // console.log(errorElement);
        break;
      case "placeName":
        this._checkInputValidity(
          regEx.placeName,
          evt.target,
          this._formSelector
        );
        //console.log(errorElement);
        break;
      case "link":
        this._checkInputValidity(regEx.link, evt.target, this._formSelector);

        break;
    }
  }
  _checkInputValidity(expresion, inputElement, formID) {
    const formElement = document.getElementById(formID);
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

    if (expresion.test(inputElement.value)) {
      errorElement.classList.remove(this._errorClass);

      errorElement.textContent = "";
      inputElement.classList.remove(this._inputErrorClass);
    } else {
      errorElement.textContent = inputElement.validationMessage;
      errorElement.classList.add(this._errorClass);
      inputElement.classList.add(this._inputErrorClass);
    }
  }
  // termina check show error
  // is valid

  isValid(formID) {
    let valid = "";
    const formElement = document.getElementById(formID);
    const inputsList = Array.from(
      formElement.querySelectorAll(this._inputSelector)
    );

    if (
      inputsList.every((inputElement) => {
        return inputElement.validity.valid;
      })
    ) {
      valid = true;
    } else {
      valid = false;
    }
    return valid;
  }

  // toggleBtn
  toggleBtnState(formID) {
    const formElement = document.getElementById(formID);
    const btnElement = formElement.querySelector(this._submitButtonSelector);

    if (this.isValid(formID) === true) {
      btnElement.classList.remove(this._inactiveButtonClass);
    } else {
      btnElement.classList.add(this._inactiveButtonClass);
    }
  }

  //prueba enable validation
  enableValidation() {
    const formElement = document.getElementById(this._formSelector);

    const inputsList = Array.from(
      formElement.querySelectorAll(this._inputSelector)
    );
    this.toggleBtnState(this._formSelector);
    inputsList.forEach((input) => {
      input.addEventListener("input", (evt) => {
        this.switchingInput(evt);
        this.toggleBtnState(this._formSelector);
      });
    });
  }

  test() {
    const formElement = document.getElementById(this._formSelector);

    const errorElement = formElement.querySelector(`.${evt.target.id}-error`);
    console.log(errorElement);
  }
}
//termina objeto
//  prueba Para Profile form

//Proyecto 8
