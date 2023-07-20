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
import PopupConfirmation from "./script/components/PopupConfirmation";

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
            deleteHandler: (id) => {
              const confirmation = new PopupConfirmation(
                {
                  submitHandler: () => {
                    api.deleteCard(id);
                    card.trashBtnFunctions();
                    console.log(id);
                  },
                },
                popupDeleteCard
              );
              confirmation.submitFunctions();
              console.log(id); // esta funcion si regresa al id de vard
              confirmation.open();
              // console.log(argumento);
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

function createNewCard(item) {
  console.log(item);
  const apiCard = new Card(
    {
      data: item,
      photoHandler: (src, name) => {
        const photo = new PopupWithImage(popupPhoto);
        const newPhoto = photo.open(src, name);
      },
      deleteHandler: (cardId) => {
        const confirmation = new PopupConfirmation(popupDeleteCard);
        confirmation.setEventListenersOpen();

        confirmation.submitEventListener(cardId);
      },
    },
    "#card-template"
  );
  apiCard.test();
  return apiCard.generateCard();
}
function newCardApi() {
  const formPopupPlace = new PopupWithForm( // declarando form
    {
      formSubmitHandler: (newCard) => {
        // console.log(newCard);
        api.addNewCardPetition(newCard).then((result) => {
          // console.log(res);
          document
            .querySelector(".card-container")
            .prepend(createNewCard(result));
          formPopupPlace.close();
        });
      },
    },
    popupAddNewPlace
  );
  formPopupPlace.setEventListeners(btnAddNewPlace);
}
newCardApi();

/*const testconfirmation = new PopupConfirmation({
  confirmationHandler: () => {
    console.log("desde confirmation test en Index");
  },
});
testconfirmation.setEventListeners();
*/
