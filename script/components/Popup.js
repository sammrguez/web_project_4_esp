export default class Popup {
  constructor(popup) {
    this._popup = popup;
    this._form = popup.querySelector(".form");
  }
  open() {
    this._popup.classList.add("popup_opened");
  }
  close() {
    this._popup.classList.remove("popup_opened");
  }
  _handleEscClose() {
    document.addEventListener("keydown", (evt) => {
      evt.preventDefault;
      if (evt.key === "Escape") {
        this.close();
      }
    });
  }
  setEventListeners(openButton) {
    openButton.addEventListener("click", () => {
      this.open();
    });
    this._handleEscClose();
    this._form
      .querySelector(".form__close-button")
      .addEventListener("click", (evt) => {
        evt.preventDefault();
        this.close();
      });
  }
}
