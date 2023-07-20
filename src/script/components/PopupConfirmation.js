import Popup from "./Popup.js";
import { btnDeleteConfirmation, api } from "../utils/Data.js";
export default class PopupConfirmation extends Popup {
  constructor({ submitHandler }, popup) {
    super(popup);
    this._submitHandler = submitHandler;
  }

  setEventListeners() {
    this.submitFunctions();
  }
  submitFunctions() {
    btnDeleteConfirmation.addEventListener("click", (evt) => {
      evt.preventDefault();
      evt.stopImmediatePropagation();
      this._submitHandler();
      this.close();
    });
    // api.deleteCard(cardId);
    // this.close();
  }
}
