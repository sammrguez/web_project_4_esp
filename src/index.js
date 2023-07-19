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

// Rendeizar initial Cards
export const addedCardsArray = [];

export function renderCards(dataArray) {
  dataArray.forEach((item) => {
    addedCardsArray.push(item);
  });
  // console.log(addedCardsArray);
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
  const initialCardsApi = api.cardsAddedRequest();
  initialCardsApi
    .then((res) => {
      if (res.ok) {
        // console.log("todo ok");
        return res.json();
      }
      return Promise.reject(res.status);
    })
    .then((res) => {
      renderCards(res);
    })
    .catch((error) => {
      console.log(`Error: ${error}`);
    });
}
initialCardsRequest();

/*const testForm = new PopupWithForm(
  {
    formSubmitHandler: (inputs) => {
      console.log("desde form handler index");
      console.log(inputs);
    },
  },
  popupAddNewPlace
);
testForm.requestTest();
testForm.setEventListeners(btnAddNewPlace);
*/
//new card functions
/*
const formPopupPlace = new PopupWithForm(
  {
    formSubmitHandler: (newCard) => {
      let somepetition = api.addNewCardPetition(newCard);
      somepetition
        .then((res) => {
          if (res.ok) {
            console.log("todo ok");
            return res.json();
          }
          return Promise.reject(res.status);
        })
        .then((res) => {
          console.log("desde card petition en index");
          console.log(res);
        })
        .catch((error) => {
          console.log(`Error: ${error}`);
        });
    },
  },
  popupAddNewPlace
);
formPopupPlace.setEventListeners(btnAddNewPlace);*/
function usingNewCard(item) {
  console.log(item);
  const apiCard = new Card(
    {
      data: item,
      photoHandler: (src, name) => {
        const photo = new PopupWithImage(popupPhoto);
        const newPhoto = photo.open(src, name);
      },
    },
    "#card-template"
  );
  return apiCard.generateCard();
}
const formPopupPlace = new PopupWithForm( // declarando form
  {
    formSubmitHandler: (newCard) => {
      // console.log(newCard);
      api
        .addNewCardPetition(newCard)
        .then((result) => {
          // console.log(res);
          document
            .querySelector(".card-container")
            .prepend(usingNewCard(result));
          formPopupPlace.close();
        })
        .finally(() => {
          console.log("llegó aquí");
        });
    },
  },
  popupAddNewPlace
);
formPopupPlace.setEventListeners(btnAddNewPlace);
