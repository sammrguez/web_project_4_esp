import { Api } from "../components/API.js";
const apiCards = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/web_es_07/",
  headers: {
    authorization: "d73ff8a4-5ad7-42cb-999c-d084ca2e6847",
    "content-Type": "application/json",
  },
});

console.log("data");

export const initialCards = [
  {
    placeName: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    placeName: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    placeName: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    placeName: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    placeName: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    placeName: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];
//constantes universales
export const btnEditProfile = document.querySelector(".edit-button");
export const btnCreateProfile = document.querySelector(".form__submit-button");
export const btnCloseEditProfile = document.querySelector(
  ".form__close-button"
);
export const popupEditProfile = document.querySelector(
  ".popup_type_edit-profile"
);
export const userName = document.querySelector(".profile__user-name");
export const userAboutMe = document.querySelector(".profile__user-profession");
export const userAvatar = document.querySelector(".profile__avatar");
export const userNameInput = document.querySelector("#name-input");
export const userProfessionInput = document.querySelector("#about-me-input");
export const btnAddNewPlace = document.querySelector(".add-button");
export const btnCloseNewPlace = document.querySelector(
  ".form__close-button_type_new-place"
);
export const popupAddNewPlace = document.querySelector(".popup_type_new-place");
export const btnSubmitNewPlace = document.querySelector(
  ".form__submit-button_place"
);
export const likeCounter = document.querySelector(".like-button-counter");
export const cardsContainer = document.querySelector(".card-container");
export const popupPhoto = document.querySelector(".popup_type_photo");

//popup photo
export const linkPopup = document.querySelector(".popup__photo");
export const captionPopup = document.querySelector(".popup__photo-caption");
export const btnClosePhoto = document.querySelector(".popup__close-button");
