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
  simpleTest() {
    closeDeletePopup.addEventListener("click", (evt) => {
      console.log("diste click al tache desde simple");
      evt.preventDefault();
      evt.stopImmediatePropagation();
      this.close();
    });
  }
  simpleTest2() {
    btnDeleteConfirmation.addEventListener("click", (evt) => {
      console.log("diste click a si desde simple2");
      this._submitHandler();
      this.close();
    });
  }
}
