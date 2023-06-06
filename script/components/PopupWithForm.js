import Popup from "./Popup.js";
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
    // console.log(this._inputList);
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
  }

  close() {
    super.close();
    this._form.reset();
  }

  setEventListeners(openButton) {
    super.setEventListeners(openButton);

    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this.close();
      this._formSubmitHandler();
    });
  }
}
