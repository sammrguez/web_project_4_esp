import Popup from "./Popup.js";
import { btnDeleteConfirmation, closeDeletePopup } from "../utils/Data.js";
export default class PopupConfirmation extends Popup {
  constructor({ submitHandler }, popup) {
    super(popup);
    this._submitHandler = submitHandler;
    this._form = this._popup.querySelector(".form");
  }

  setEventListeners() {
    btnDeleteConfirmation.addEventListener("click", (evt) => {
      evt.preventDefault();
      evt.stopImmediatePropagation();

      this._submitHandler();
      this.close();
    });
    closeDeletePopup.addEventListener("click", (evt) => {
      evt.preventDefault();

      this.close();
    });
  }
  submitFunctions() {
    btnDeleteConfirmation.addEventListener("click", (evt) => {
      evt.preventDefault();
      evt.stopImmediatePropagation();
      this._submitHandler();
      this.close();
    });
    closeDeletePopup.addEventListener("click", (evt) => {
      evt.preventDefault();

      this.close();
    });
  }
}
