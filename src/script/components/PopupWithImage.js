// popup with image
import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
  }
  open(src, name) {
    super.open();
    this._photo = document.querySelector(".popup__photo").src = src;
    this._photo = document.querySelector(
      ".popup__photo"
    ).alt = `imagen de ${name}`;
    this._caption = document.querySelector(
      ".popup__photo-caption"
    ).textContent = name;
  }
  handleEscClose() {
    document.addEventListener("keydown", (evt) => {
      evt.preventDefault;
      if (evt.key === "Escape") {
        this.close();
      }
    });
  }
}
