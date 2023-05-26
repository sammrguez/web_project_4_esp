import { btnCloseEditProfile } from "./Data,js";
export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }
  open() {
    this._popup.classList.add("popup_opened");
  }
  close() {
    this._popup.classList.remove("popup_opened");
  }
  _handleEscClose() {
    document.addEventListener("keydown", function (evt) {
      if (evt.key === "Escape") {
        this._popup.classList.remove("popup_opened");
      }
    });
  }
  setEventListeners() {
    this._popup.content
      .querySelector(btnCloseEditProfile)
      .addEventListener("click", () => {
        this.close();
      });
  }
}
