import Popup from "./Popup.js";

class PopupWithImage extends Popup {
  constructor({ renderer }, popup) {
    super(popup);
    this._renderer = renderer;
  }
  open() {
    this._renderer();
  }
}
