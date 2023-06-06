import Popup from "./Popup.js";
import { Card } from "./Card.js";

export default class PopupWithImage extends Popup {
  constructor(item, popup) {
    super(popup);
    this._renderer = new Card(item, "#card-template");
  }
  open() {
    super.open();
    this._renderer.handleOpenPopup();
  }
}
