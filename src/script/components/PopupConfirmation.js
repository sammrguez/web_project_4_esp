import Popup from "./Popup.js";
import { btnDeleteConfirmation, api, closeDeletePopup } from "../utils/Data.js";
export default class PopupConfirmation extends Popup {
  constructor({ submitHandler }, popup) {
    super(popup);
    this._submitHandler = submitHandler;
  }

  setEventListeners() {
    btnDeleteConfirmation.addEventListener("click", (evt) => {
      evt.preventDefault();
      evt.stopImmediatePropagation();
      console.log("desde set eventListeners");
      this._submitHandler();
      this.close();
    });
    closeDeletePopup.addEventListener("click", (evt) => {
      evt.preventDefault();
      console.log("diste click a cverrar popup");
      // evt.stopImmediatePropagation();
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
      console.log("diste click a cverrar popup");
      // evt.stopImmediatePropagation();
      this.close();
    });
  }
}
