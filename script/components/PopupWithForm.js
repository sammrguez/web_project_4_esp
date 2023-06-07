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
    console.log(formValues);
    return formValues;
  }

  close() {
    super.close();
    this._form.reset();
  }

  setEventListeners(openButton) {
    console.log("desde popupwf");

    this.getInputValues();
    super.setEventListeners(openButton);
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._formSubmitHandler(this.getInputValues());
      this.close();
      this.getInputValues();
    });
  }
}
