import { popupPhoto, linkPopup, captionPopup, btnClosePhoto } from "./Data.js";
import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }
  open() {
    super.open();
    linkPopup.src = this._link;
    captionPopup.textContent = this._name;
  }
}
