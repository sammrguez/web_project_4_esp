import { FormValidator } from "./FormValidator.js";
import { Card, cardsContainer } from "./Card.js";
import { initialCards } from "./Data.js";
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
