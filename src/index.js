import "./styles/index.css";
import {
  btnEditProfile,
  popupEditProfile,
  initialCards,
  defaultCards,
  popupPhoto,
  popupAddNewPlace,
  btnAddNewPlace,
  btnSubmitNewPlace,
  userAvatar,
  userName,
  userAboutMe,
  popupDeleteCard,
  btnDeleteCard,
} from "./script/utils/Data.js";
import Section from "./script/components/Section.js";

import { FormValidator } from "./script/components/FormValidator.js";
import { Card, cardsContainer } from "./script/components/Card.js";
import PopupWithImage from "./script/components/PopupWithImage.js";
import PopupWithForm from "./script/components/PopupWithForm.js";
import userInfo from "./script/components/UserInfo.js";
import { Api } from "./script/components/API.js";

// objetos para validar
const validationObject = {
  formSelector: "profile",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit-button",
  inactiveButtonClass: "form__submit-button_inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
};

const validationObject2 = {
  formSelector: "place",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit-button",
  inactiveButtonClass: "form__submit-button_inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
};
//llamando a FormValidator
const ProfileValidation = new FormValidator(validationObject);
const test = ProfileValidation.enableValidation();
//prueba para place form
const PlaceValidation = new FormValidator(validationObject2);
const test2 = PlaceValidation.enableValidation();

// Poryecto 9

const defaultCardList = new Section(
  {
    items: initialCards,
    /* items: () => {
      const apiCard = new Api({
        baseUrl: "https://around.nomoreparties.co/v1/web_es_07/",
        headers: {
          authorization: "d73ff8a4-5ad7-42cb-999c-d084ca2e6847",
          "content-Type": "application/json",
        },
      });
      const apiCardsArray = apiCard.getCards();
    } */
    renderer: (item) => {
      const card = new Card(
        {
          data: item,
          photoHandler: (src, name) => {
            const photo = new PopupWithImage(popupPhoto);
            const newPhoto = photo.open(src, name);
          },
        },
        "#card-template"
      );
      const newCard = card.generateCard();
      defaultCardList.addItem(newCard);
    },
  },
  cardsContainer
);
defaultCardList.renderItems();

//popup form profile
const formPopupProfile = new PopupWithForm(
  {
    formSubmitHandler: (data) => {
      // aqui empieza callback

      const user = new userInfo({ data: data });
      const newUser = user.setUserInfo();
      const resetUser = user.getUserInfo();
      const newProfileApi = new Api({
        baseUrl: "https://around.nomoreparties.co/v1/web_es_07/",
        headers: {
          authorization: "d73ff8a4-5ad7-42cb-999c-d084ca2e6847",
          "content-Type": "application/json",
        },
      });
      newProfileApi.edithProfile({
        name: data.name,
        about: data["about-me"],
      });
    }, //aqui termina
  },
  popupEditProfile
);
const newFormPopup = formPopupProfile.setEventListeners(btnEditProfile);

/*/popup form delete
const formPopupDelete = new PopupWithForm(
  {
    formSubmitHandler: () => {
      console.log("desde delete handler");
    },
  },
  popupDeleteCard
);
formPopupDelete.setEventListeners(btnDeleteCard);
//  popup form place*/
const formPopupPlace = new PopupWithForm( // declarando form
  {
    formSubmitHandler: (data) => {
      const newItem = data;
      const addedCardList = [];
      console.log(addedCardList);
      const newCardApi = new Api({
        baseUrl: "https://around.nomoreparties.co/v1/web_es_07/",
        headers: {
          authorization: "d73ff8a4-5ad7-42cb-999c-d084ca2e6847",
          "content-Type": "application/json",
        },
      });
      newCardApi.addNewCard(data);
      addedCardList.push(newItem);
      btnSubmitNewPlace.classList.add("form__submit-button_inactive");
      const inputSection = new Section(
        {
          items: addedCardList,
          renderer: (data) => {
            const inputCard = new Card(
              {
                data: data,
                photoHandler: (src, name) => {
                  const photo = new PopupWithImage(popupPhoto);
                  const newPhoto = photo.open(src, name);
                },
              },
              "#card-template"
            );
            const newCard = inputCard.generateCard();
            inputSection.addItem(newCard);
          },
        },
        cardsContainer
      );
      inputSection.renderItems();
    },
  },
  popupAddNewPlace
);
formPopupPlace.setEventListeners(btnAddNewPlace, ".form__submit-button_place"); // se acciona  popuop with form
// Proyecto 10 llamandp a API
export const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/web_es_07/",
  headers: {
    authorization: "d73ff8a4-5ad7-42cb-999c-d084ca2e6847",
    "content-Type": "application/json",
  },
});
api.defaultProfile();
