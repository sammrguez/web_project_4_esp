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
const validationObjectAvatar = {
  formSelector: "avatar",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit-button",
  inactiveButtonClass: "form__submit-button_inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
};

//llamando a FormValidator
const ProfileValidation = new FormValidator(validationObject);
ProfileValidation.enableValidation();
//prueba para place form
const PlaceValidation = new FormValidator(validationObject2);
PlaceValidation.enableValidation();
const avatarValidation = new FormValidator(validationObjectAvatar);
avatarValidation.enableValidation();
//popup form profile

api.defaultProfile();
function renderProfileInfo(data) {
  const user = new userInfo({ data: data });
  user.setUserInfo();
  user.getUserInfo();
}
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
        .then((res) => {
          renderProfileInfo(res);
        })
        .finally(() => {
          formPopupProfile.renderLoading(false);
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
        const newPhoto = photo.open(src, name);
      },
      deleteHandler: (id) => {
        const confirmation = new PopupConfirmation(
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
            formPopupProfile.renderLoading(false);
          });
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
        });
    },
  },
  popupUpdateAvatar
);
newPpdateAvatar.setEventListeners(btnUpdateAvatar);
