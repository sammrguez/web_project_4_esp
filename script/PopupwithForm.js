import Popup from "./Popup";
export default class PopupWithForm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._submit = submit;
  }
  getInputValues() {
    const inputsArray = this_.popup.document.querySelectorAll(".form__input");
    inputsArray;
  }
}
