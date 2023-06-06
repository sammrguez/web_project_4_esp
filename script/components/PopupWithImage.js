import Popup from "./Popup.js";
import { Card } from "./Card.js";
import { linkPopup, captionPopup } from "../utils/Data.js";

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
}
