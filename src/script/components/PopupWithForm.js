import Popup from "./Popup.js";
import userInfo from "./UserInfo.js";
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
  }
  getInputValues() {
    this._inputList = this._form.querySelectorAll(".form__input");
    const formValues = {};
    this._inputList.forEach((input) => {
      formValues[input.name] = input.value;
    });
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
}