import "./styles/index.css";

import {
  btnEditProfile,
  popupEditProfile,
  popupPhoto,
  popupAddNewPlace,
  btnAddNewPlace,
  popupDeleteCard,
  api,
  popupUpdateAvatar,
  btnUpdateAvatar,
  profileAvatar,
  userNameInput,
  userProfessionInput,
  userName,
  userAboutMe,
} from "./script/utils/Data.js";

import Section from "./script/components/Section.js";
import { FormValidator } from "./script/components/FormValidator.js";
import { Card, cardsContainer } from "./script/components/Card.js";
import PopupWithImage from "./script/components/PopupWithImage.js";
import PopupWithForm from "./script/components/PopupWithForm.js";
import { UserInfo } from "./script/components/UserInfo.js";
import PopupWithConfirmation from "./script/components/PopupWithConfirmation";

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

const validationObjectAvatar = {
  formSelector: "avatar",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit-button",
  inactiveButtonClass: "form__submit-button_inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
};

export const userData = new UserInfo("#name-input", "#about-me-input");

//llamando a FormValidator

const ProfileValidation = new FormValidator(validationObject);

ProfileValidation.setEventListeners();

//prueba para place form
const PlaceValidation = new FormValidator(validationObject2);
PlaceValidation.setEventListeners();

const avatarValidation = new FormValidator(validationObjectAvatar);
avatarValidation.setEventListeners();
//popup form profile
api.defaultProfile();
const formPopupProfile = new PopupWithForm(
  {
    formSubmitHandler: (data) => {
      // aqui empieza callback
      formPopupProfile.renderLoading(true);
      api
        .editProfile({
          name: data.name,
          about: data["about-me"],
        })

        .finally(() => {
          formPopupProfile.renderLoading(false);
          ProfileValidation.toggleBtnState();
        });
      userData.setUserInfo();
      userData.getUserInfo();
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
  const defaultCardList = new Section(
    {
      items: addedCardsArray,
      renderer: (item) => {
        const card = new Card(
          {
            data: item,
            photoHandler: (src, name) => {
              const photo = new PopupWithImage(popupPhoto);
              photo.open(src, name);
            },

            deleteHandler: (id) => {
              const confirmation = new PopupWithConfirmation(
                {
                  submitHandler: () => {
                    api.deleteCard(id).then((res) => {});
                    card.trashBtnFunctions();
                  },
                },
                popupDeleteCard
              );

              confirmation.setEventListeners();
              confirmation.open();
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
  const apiCard = new Card(
    {
      data: item,
      photoHandler: (src, name) => {
        const photo = new PopupWithImage(popupPhoto);
        photo.open(src, name);
      },

      deleteHandler: (id) => {
        const confirmation = new PopupWithConfirmation(
          {
            submitHandler: () => {
              api.deleteCard(id);
              apiCard.trashBtnFunctions();
            },
          },
          popupDeleteCard
        );
        confirmation.submitFunctions();
        confirmation.open();
      },
    },
    "#card-template"
  );

  return apiCard.generateCard();
}

function newCardApi() {
  const formPopupPlace = new PopupWithForm( // declarando form
    {
      formSubmitHandler: (newCard) => {
        formPopupPlace.renderLoading(true);
        api
          .addNewCardPetition(newCard)
          .then((result) => {
            document
              .querySelector(".card-container")
              .prepend(createNewCard(result));
            formPopupPlace.close();
          })
          .finally(() => {
            formPopupPlace.renderLoading(false);
            PlaceValidation.toggleBtnState();
          });
        formPopupPlace.resetInputs();
      },
    },
    popupAddNewPlace
  );
  formPopupPlace.setEventListeners(btnAddNewPlace);
}

newCardApi();

function renderAvatar(avatarUrl) {
  profileAvatar.src = avatarUrl;
}
const newPpdateAvatar = new PopupWithForm(
  {
    formSubmitHandler: (data) => {
      newPpdateAvatar.renderLoading(true);
      api
        .updateAvatar({
          avatar: data.updateAvatar,
        })
        .then((res) => {
          renderAvatar(res.avatar);
        })
        .finally(() => {
          newPpdateAvatar.renderLoading(false);
          avatarValidation.toggleBtnState();
        });
      newPpdateAvatar.resetInputs();
    },
  },
  popupUpdateAvatar
);
newPpdateAvatar.setEventListeners(btnUpdateAvatar);
