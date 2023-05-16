import { popupPhoto, linkPopup, captionPopup, btnClosePhoto } from "./Data.js";
export const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];
export const cardsContainer = document.querySelector(".card-container");

export class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
  }
  _getTemplate() {
    const cardTemplate = document.querySelector(this._templateSelector).content;
    const cardElement = cardTemplate
      .querySelector(".place-card")
      .cloneNode(true);
    return cardElement;
  }
  generateCard() {
    this._cardElement = this._getTemplate();
    this._cardElement.querySelector(".place-card__name").textContent =
      this._name;
    this._cardElement.querySelector(".place-card__photo").src = this._link;
    this._setEventListeners();

    const trashBtn = this._cardElement.querySelector(".trash-button");
    trashBtn.addEventListener("click", () => {
      const cardToRemove = trashBtn.closest(".place-card");
      cardToRemove.remove();
    });
    const likeIcon = this._cardElement.querySelector(".like-button");
    likeIcon.addEventListener("click", function (evt) {
      evt.target.classList.toggle("like-button_active");
    });
    return this._cardElement;
  }

  _handleOpenPopup() {
    linkPopup.src = this._link;
    captionPopup.textContent = this._name;
    popupPhoto.classList.add("popup_opened");
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
}
