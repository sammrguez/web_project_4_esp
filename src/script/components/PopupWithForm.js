import Popup from "./Popup.js";
import { userName, userAboutMe } from "../utils/Data.js";
export default class PopupWithForm extends Popup {
  constructor({ formSubmitHandler }, popup) {
    super(popup);
    this._formSubmitHandler = formSubmitHandler;
    this._form = this._popup.querySelector(".form");
  }

  close() {
    super.close();
    if (this._form.id == "place") {
      this._form.reset();
    }
    this._popup.querySelector(".overlay").addEventListener("click", (evt) => {
      this._popup.classList.remove("popup_opened");
      evt.stopImmediatePropagation();
    });
  }
  getInputValues() {
    this._inputList = this._form.querySelectorAll(".form__input");
    const formValues = {};
    this._inputList.forEach((input) => {
      formValues[input.name] = input.value;
    });
    //   console.log(formValues);
    return formValues;
  }

  setEventListeners(openButton) {
    this.getInputValues();
    super.setEventListeners(openButton);
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      evt.stopImmediatePropagation();
      this._formSubmitHandler(this.getInputValues());

      this.close();
      document.forms.place.reset();
    });
  }
  aceptForm(openForm) {
    super.setEventListeners(openForm);
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      evt.stopImmediatePropagation();
      this.close();
      this._formSubmitHandler();
    });
  }
}
