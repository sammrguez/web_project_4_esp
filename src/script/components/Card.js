import {
  popupPhoto,
  linkPopup,
  captionPopup,
  btnClosePhoto,
  api,
} from "../utils/Data.js";

export const cardsContainer = document.querySelector(".card-container");

export class Card {
  constructor({ data, photoHandler, deleteHandler }, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._likes = data.likes;
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
    // console.log(this._cardElement);
    this._cardElement.id = this._id;

    this._setEventListeners();
    return this._cardElement;
  }

  _handleOpenPopup() {
    this._photoHandler(this._link, this._name);
  }

  _handleClosePopup() {
    linkPopup.src = " ";
    captionPopup.textContent = " ";
    popupPhoto.classList.remove("popup_opened");
  }
  likeadding() {}

  _setEventListeners() {
    this._cardElement
      .querySelector(".place-card__photo")
      .addEventListener("click", () => {
        this._handleOpenPopup();
      });
    btnClosePhoto.addEventListener("click", () => {
      this._handleClosePopup();
    });
    const trashBtn = this._cardElement.querySelector(".trash-button");
    trashBtn.addEventListener("click", (evt) => {
      // console.log("enviado desde setevent de card open handler");
      this._deleteHandler(this._cardElement.id);
      console.log(this._cardElement.id);
    });
    //const likeNumber = this._cardElement.querySelector(".like-button-counter");
    const likeIcon = this._cardElement.querySelector(".like-button");
    likeIcon.addEventListener("click", (evt) => {
      evt.target.classList.toggle("like-button_active");
      if (evt.target.classList.contains("like-button_active")) {
        console.log(`se suma un like en la card${this._cardElement.id}`);
        api.returnCardInfo(cardId);
      } else {
        console.log(`se resta un like en la card${this._cardElement.id}`);
      }
      // this.likeadding();
    });
  }

  trashBtnFunctions() {
    const trashBtn = this._cardElement.querySelector(".trash-button");
    const cardToRemove = trashBtn.closest(".place-card");
    cardToRemove.remove();
  }
  test() {
    console.log(this._id);
  }
}
