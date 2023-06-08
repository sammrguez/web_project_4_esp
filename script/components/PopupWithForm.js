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
  }
  getInputValues() {
    this._inputList = this._form.querySelectorAll(".form__input");
    const formValues = {};
    this._inputList.forEach((input) => {
      formValues[input.name] = input.value;
    });
    return formValues;
  }

  close() {
    super.close();
  }

  setEventListeners(openButton) {
    this.getInputValues();
    super.setEventListeners(openButton);
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      evt.stopImmediatePropagation();
      this._formSubmitHandler(this.getInputValues());
      this.close();
      this.getInputValues();
    });
  }
}
