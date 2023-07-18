import {
  popupPhoto,
  linkPopup,
  captionPopup,
  btnClosePhoto,
} from "../utils/Data.js";
import { Api } from "./API.js";
export const cardsContainer = document.querySelector(".card-container");

export class Card {
  constructor({ data, photoHandler, deleteHandler }, templateSelector) {
    this._name = data.placeName;
    this._link = data.link;
    this._id = data.id;
    this._templateSelector = templateSelector;
    this._photoHandler = photoHandler;
    this._deleteHandler = deleteHandler;
  }
  getTemplate() {
    const cardTemplate = document.querySelector(this._templateSelector).content;
    const cardElement = cardTemplate
      .querySelector(".place-card")
      .cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._cardElement = this.getTemplate();
    this._cardElement.querySelector(".place-card__name").textContent =
      this._name;
    this._cardElement.querySelector(".place-card__photo").src = this._link;
    this._cardElement.id = this._id;
    this._setEventListeners();

    const trashBtn = this._cardElement.querySelector(".trash-button");
    trashBtn.addEventListener("click", (evt) => {
      const cardToRemove = trashBtn.closest(".place-card");
      console.log(evt.target);
      this.apiDelete(this._cardElement.id);
      //this.handlePopupDelete(this._cardElement.id, evt.target);
      cardToRemove.remove();
    });
    const likeIcon = this._cardElement.querySelector(".like-button");
    const likeCounter = this._cardElement.querySelector(".like-button-counter");
    let setupLikes = 0;
    likeIcon.addEventListener("click", function (evt) {
      evt.target.classList.toggle("like-button_active");
      setupLikes = +1;
      likeCounter.textContent = setupLikes;
    });

    return this._cardElement;
  }
  apiDelete(cardId) {
    const deleteApi = new Api({
      baseUrl: "https://around.nomoreparties.co/v1/web_es_07/",
      headers: {
        authorization: "d73ff8a4-5ad7-42cb-999c-d084ca2e6847",
        "content-Type": "application/json",
      },
    });
    deleteApi.deleteCard(cardId);
  }
  handlePopupDelete(cardId, openForm) {
    this._deleteHandler(cardId, openForm);
  }
  _handleOpenPopup() {
    this._photoHandler(this._link, this._name);
  }

  _handleClosePopup() {
    linkPopup.src = " ";
    captionPopup.textContent = " ";
    popupPhoto.classList.remove("popup_opened");
  }

  _setEventListeners() {
    this._cardElement
      .querySelector(".place-card__photo")
      .addEventListener("click", () => {
        this._handleOpenPopup();
      });
    btnClosePhoto.addEventListener("click", () => {
      this._handleClosePopup();
    });
  }
  test() {
    this.generateCard();
  }
}
