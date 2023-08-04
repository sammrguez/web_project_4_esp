export default class Popup {
  constructor(popup) {
    this._popup = popup;
    this._form = popup.querySelector(".form");
  }
  open() {
    this._popup.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose.bind(this));
  }
  close() {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose.bind(this));
  }
  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners(openButton) {
    openButton.addEventListener("click", () => {
      this.open();
    });
    this._form
      .querySelector(".form__close-button")
      .addEventListener("click", (evt) => {
        evt.preventDefault();
        this.close();
      });
  }
}
