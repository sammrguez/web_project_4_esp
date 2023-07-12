import Popup from "./Popup.js";
import { Api } from "./API.js";
import { userName, userAboutMe } from "../utils/Data.js";
export default class PopupWithForm extends Popup {
  constructor({ formSubmitHandler }, popup) {
    super(popup);
    this._formSubmitHandler = formSubmitHandler;
    this._form = this._popup.querySelector(".form");
  }

  close() {
    super.close();
    if (this._form.id == "place") {
      this._form.reset();
    }
    this._popup.querySelector(".overlay").addEventListener("click", (evt) => {
      this._popup.classList.remove("popup_opened");
      evt.stopImmediatePropagation();
    });
  }
  getInputValues() {
    this._inputList = this._form.querySelectorAll(".form__input");
    const formValues = {};
    this._inputList.forEach((input) => {
      formValues[input.name] = input.value;
    });
    return formValues;
  }

  setEventListeners(openButton) {
    this.getInputValues();
    super.setEventListeners(openButton);
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      evt.stopImmediatePropagation();
      this._formSubmitHandler(this.getInputValues());
      const newProfileApi = new Api({
        baseUrl: "https://around.nomoreparties.co/v1/web_es_07/",
        headers: {
          authorization: "d73ff8a4-5ad7-42cb-999c-d084ca2e6847",
          "content-Type": "application/json",
        },
      });
      newProfileApi.edithProfile({
        name: this._form.name.value,
        about: this._form["about-me"].value,
      });
      this.close();
      document.forms.place.reset();
    });
  }
}
