import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor({ formSubmitHandler }, popup) {
    super(popup);
    this._formSubmitHandler = formSubmitHandler;
    this._form = this._popup.querySelector(".form");
  }
  open() {
    super.open();
  }
  close() {
    super.close();
  }
  getInputValues() {
    console.log(this._popup);
    console.log(this._form);
    this._inputList = this._form.querySelectorAll(".form__input");
    console.log(this._inputList);
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
      console.log(this._formValues);
    });
  }
  setEventListeners(openButton) {
    super.setEventListeners(openButton);
  }
  close() {
    super.close();
    this._form.reset();
  }
}
