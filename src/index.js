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
  api,
} from "./script/utils/Data.js";
import Section from "./script/components/Section.js";

import { FormValidator } from "./script/components/FormValidator.js";
import { Card, cardsContainer } from "./script/components/Card.js";
import PopupWithImage from "./script/components/PopupWithImage.js";
import PopupWithForm from "./script/components/PopupWithForm.js";
import userInfo from "./script/components/UserInfo.js";

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

function renderCards(dataArray) {
  const addedCardsArray = [];
  dataArray.forEach((item) => {
    addedCardsArray.push(item);
  });
  console.log(addedCardsArray);
  // return addedCardsArray;
  const defaultCardList = new Section(
    {
      items: addedCardsArray,
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
}

function initialCardsRequest() {
  const testRC = api.cardsAddedPedido();
  testRC
    .then((res) => {
      if (res.ok) {
        console.log("todo ok");
        return res.json();
      }
      return Promise.reject(res.status);
    })
    .then((res) => {
      renderCards(res);
      console.log("desde segundo then");
    })
    .catch((error) => {
      console.log(`Error: ${error}`);
    });
}
initialCardsRequest();

/*
const defaultCardList = new Section(
  {
    items: () => {
      const testRC = new api.cardsAddedPedido();
      testRC
        .then((res) => {
          if (res.ok) {
            console.log("todo ok");
            return res.json();
          }
          return Promise.reject(res.status);
        })
        .then((res) => {
          usingCardsInfo(res);
        })
        .catch((error) => {
          console.log(`Error: ${error}`);
        });
    },
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
      defaultCardList.test();
      //addItem(newCard);
    },
  },
  cardsContainer
);
defaultCardList.test();
*/
//popup form profile
api.defaultProfile();
const formPopupProfile = new PopupWithForm(
  {
    formSubmitHandler: (data) => {
      // aqui empieza callback

      const user = new userInfo({ data: data });
      user.setUserInfo();
      user.getUserInfo();

      api.edithProfile({
        name: data.name,
        about: data["about-me"],
      });
    }, //aqui termina
  },
  popupEditProfile
);
formPopupProfile.setEventListeners(btnEditProfile);
// funciones de perfil

/*const formPopupPlace = new PopupWithForm( // declarando form
  {
    formSubmitHandler: (data) => {
      const newItem = data;
      const addedCardList = [];
      console.log(addedCardList);
      api.addNewCard(data);
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
formPopupPlace.setEventListeners(btnAddNewPlace, ".form__submit-button_place");*/ // se acciona  popuop with form
// Proyecto 10 llamandp a API

//api.cardsAdded();

//using cards info
