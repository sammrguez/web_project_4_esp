import { handlePopup, openPopupPhoto } from "./utils.js";
import { popupPhoto } from "./Data.js";
const initialCards = [
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
const cardsContainer = document.querySelector(".card-container");

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
    this._cardElement
      .querySelector(".place-card__photo")
      .addEventListener("click", function () {
        handlePopup(popupPhoto);
        openPopupPhoto(this._name, this._link);
      });
    const trashBtn = this._cardElement.querySelector(".trash-button");
    trashBtn.addEventListener("click", function () {
      const cardToRemove = trashBtn.closest(".place-card");
      cardToRemove.remove();
    });
    const likeIcon = this._cardElement.querySelector(".like-button");
    likeIcon.addEventListener("click", function (evt) {
      evt.target.classList.toggle("like-button_active");
    });
    return this._cardElement;
  }
}

initialCards.forEach((item) => {
  const card = new Card(item, "#card-template");
  const newCard = card.generateCard();

  cardsContainer.append(newCard);
});
