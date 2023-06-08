import {
  btnEditProfile,
  popupEditProfile,
  initialCards,
  popupPhoto,
  popupAddNewPlace,
  btnAddNewPlace,
} from "../utils/Data.js";
import Section from "../components/Section.js";

import { FormValidator } from "../components/FormValidator.js";
import { Card, cardsContainer } from "../components/Card.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import userInfo from "../components/UserInfo.js";

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

// Creando Cards

/*initialCards.forEach((item) => {
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

  cardsContainer.append(newCard);
});*/

/*export function generateInputCard() {
  const data = {
    placeNname: document.querySelector("#place-name-input").value,
    link: document.querySelector("#photo-link-input").value,
  };

  const addedCard = new Card(data, "#card-template");
  const getCard = addedCard.generateCard();
  cardsContainer.prepend(getCard);
}
*/
// Poryecto 9

const defaultCardList = new Section(
  {
    items: initialCards,
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

// popup normal

//const form1 = new Popup(popupEditProfile);
//const form2 = form1.setEventListeners(btnEditProfile);

//popup form profile
const formPopupProfile = new PopupWithForm(
  {
    formSubmitHandler: (data) => {
      // aqui empieza callback

      const user = new userInfo({ data: data });
      const newUser = user.setUserInfo();
      const resetUser = user.getUserInfo();
    }, //aqui terminck
  },
  popupEditProfile
);
const newFormPopup = formPopupProfile.setEventListeners(btnEditProfile);

//  popup form place
const formPopupPlace = new PopupWithForm(
  {
    formSubmitHandler: (data) => {
      const inputCard = new Card(
        {
          data: data,
          photoHandler: (src, name) => {
            const photo = new PopupWithImage(popupPhoto); // declarando image
            const newPhoto = photo.open(src, name); //llamando image
          },
        },
        "#card-template"
      ); // declarando card
      const newInputCard = inputCard.getTemplate(); // llamando a card
    },
  },
  popupAddNewPlace
);
const newPopupPlace = formPopupPlace.setEventListeners(btnAddNewPlace); // se acciona  popuop with form
