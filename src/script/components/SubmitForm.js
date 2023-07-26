export default class SubmitForm {
  constructor({ popupSelector }) {
    this._popupSelector = popupSelector;
  }

  getTemplate() {
    const popup = document.querySelector(this._popupSelector);

    const formElement = popup.querySelector(".form");

    console.log(formElement);
  }

  _setEventListeners() {
    this._element.addEventListener("submit", (evt) => {
      evt.preventDefault();

      this._element.reset();
    });
  }

  generateForm() {
    this._element = this._getTemplate();
    this._setEventListeners();

    return this._element;
  }
}
