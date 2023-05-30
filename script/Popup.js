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
    document.addEventListener("keydown", (evt) => {
      if (evt.key === "Escape") {
        this.close();
      }
    });
  }
  setEventListeners(openButton) {
    openButton.addEventListener("click", () => {
      this.open();
    });

    this._popup
      .querySelector(".form__close-button")
      .addEventListener("click", (evt) => {
        this.close();
        evt.preventDefault();
        evt.stopImmediatePropagation();
      });
    this._handleEscClose();
  }
}
