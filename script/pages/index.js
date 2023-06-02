import {
  btnEditProfile,
  btnAddNewPlace,
  popupEditProfile,
  popupAddNewPlace,
  initialCards,
  popupPhoto,
} from "../utils/Data.js";
import Section from "../components/Section.js";
import Popup from "../components/Popup.js";
import { FormValidator } from "../components/FormValidator.js";
import { Card, cardsContainer } from "../components/Card.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import submitForm from "../components/SubmitForm.js";

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

initialCards.forEach((item) => {
  const card = new Card(item, "#card-template");
  const newCard = card.generateCard();

  cardsContainer.append(newCard);
});

export function generateInputCard() {
  const data = {
    name: document.querySelector("#place-name-input").value,
    link: document.querySelector("#photo-link-input").value,
  };

  const addedCard = new Card(data, "#card-template");
  const getCard = addedCard.generateCard();
  cardsContainer.prepend(getCard);
}

// Poryecto 9

const defaultCardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(item, "#card-template");
      const newCard = card.generateCard();
      defaultCardList;
      defaultCardList.addItem(newCard);
    },
  },
  cardsContainer
);
//popup w image
const popupimg = new PopupWithImage(
  {
    rederer: (item) => {
      const card = new Card(item, "#card-template");
      const cardPopup = card.handleOpenPopup();
    },
  },
  popupPhoto
);
// popup with form

//submit
const profileForm = new submitForm({
  popupSelector: ".popup_type_new-place",
});
const profileSumit = profileForm.getTemplate(popupEditProfile);
