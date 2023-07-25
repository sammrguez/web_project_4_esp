import { Api } from "../components/API.js";
export const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/web_es_07/",
  headers: {
    authorization: "d73ff8a4-5ad7-42cb-999c-d084ca2e6847",
    "content-Type": "application/json",
  },
});

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

export const cardsContainer = document.querySelector(".card-container");
export const popupPhoto = document.querySelector(".popup_type_photo");

//popup photo
export const linkPopup = document.querySelector(".popup__photo");
export const captionPopup = document.querySelector(".popup__photo-caption");
export const btnClosePhoto = document.querySelector(".popup__close-button");

//delete popup
export const btnDeleteConfirmation = document.querySelector(
  ".form__submit-button_delete"
);
export const popupDeleteCard = document.querySelector(".popup_type_delete");
export const closeDeletePopup = document.querySelector(
  ".form__close-button_type_delete"
);
//edit Avatar
export const popupUpdateAvatar = document.querySelector(
  ".popup_type_update-avatar"
);
export const btnUpdateAvatar = document.querySelector(
  ".profile__avatar-overlay"
);
