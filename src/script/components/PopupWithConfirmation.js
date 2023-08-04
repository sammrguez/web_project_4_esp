import Popup from "./Popup.js";
import { btnDeleteConfirmation, closeDeletePopup } from "../utils/Data.js";
export default class PopupWithConfirmation extends Popup {
  constructor({ submitHandler }, popup) {
    super(popup);
    this._submitHandler = submitHandler;
    this._form = this._popup.querySelector(".form");
  }

  submitFunctions() {
    btnDeleteConfirmation.addEventListener("click", (evt) => {
      console.log("oprimiste borrar");
      this._submitHandler();
      console.log(btnDeleteConfirmation);
      evt.preventDefault();

      this.close();
    });

    closeDeletePopup.addEventListener("click", (evt) => {
      evt.preventDefault();

      this.close();
    });
  }
}
