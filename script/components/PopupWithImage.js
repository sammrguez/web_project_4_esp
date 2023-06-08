// popup with image
import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
  }
  open(src, name) {
    super.open();
    this._photo = document.querySelector(".popup__photo").src = src;

    this._caption = document.querySelector(
      ".popup__photo-caption"
    ).textContent = name;
  }
  test() {
    console.log("desde test de popimage");
  }
}
