export default class submitForm {
  constructor({ popupSelector, handleFormSubmit }) {
    this._popupSelector = popupSelector;
    this._form = this._popupSelector.querySelector(".form");
    this._handleFormSubmit = handleFormSubmit;
  }
  _getTemplate() {
    const submitButton = this._form.content
      .querySelector(".form__submit-button")
      .cloneNode(true);
    return submitButton;
  }

  generateForm() {
    this._element = this._getTemplate();
    return this._element;
  }
}
