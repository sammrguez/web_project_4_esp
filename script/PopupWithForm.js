import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popup) {
    super(popup);
    // this._submit = submit;
  }
  getInputValues() {
    const inputsArray = this._popup.querySelectorAll(".form__input");
    console.log(inputsArray);
  }
}
