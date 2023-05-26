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

export const cardsContainer = document.querySelector(".card-container");
export const popupPhoto = document.querySelector(".popup_type_photo");

//popup photo
export const linkPopup = document.querySelector(".popup__photo");
export const captionPopup = document.querySelector(".popup__photo-caption");
export const btnClosePhoto = document.querySelector(".popup__close-button");
