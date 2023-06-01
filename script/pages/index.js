import {
  btnEditProfile,
  btnAddNewPlace,
  popupEditProfile,
  popupAddNewPlace,
  initialCards,
} from "../utils/Data.js";
import Section from "../components/Section.js";
import Popup from "../components/Popup.js";
import { FormValidator } from "../components/FormValidator.js";
import { Card, cardsContainer } from "../components/Card.js";

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

// popup with form

const form1 = new Popup(popupEditProfile);
const form2 = form1.setEventListeners(btnEditProfile);

/*const formProfile = new PopupWithForm(
  {
    formSubmitHandler: (formData) => {
      const user = new userInfo({ formData });
    },
  },
  popupEditProfile
);
const formgenerate = formProfile.setEventListeners(btnEditProfile);

const formPlace = new PopupWithForm(popupAddNewPlace);
const formPlaceGenerate = formPlace.setEventListeners(btnAddNewPlace);

const submit = new submitForm({
  popup: popupEditProfile,
  handleFormSubmit: (formData) => {},
});
const submit2 = submit.generateForm();
*/
