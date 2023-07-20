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
    // this._deleteHandler(trashBtn);
    /*trashBtn.addEventListener("click", (evt) => {
      const cardToRemove = trashBtn.closest(".place-card");
      //console.log(evt.target);
      this._deleteHandler(this._id);
      //api.deleteCard(this._id); //this._deleteHandler() en el handler que se debe declarar en index
      cardToRemove.remove();
    });¨*/
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
    const trashBtn = this._cardElement.querySelector(".trash-button");
    trashBtn.addEventListener("click", (evt) => {
      console.log("enviado desde setevent de card open handler");
      this._deleteHandler(this._cardElement.id);
      // console.log(this._cardElement.id);
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
