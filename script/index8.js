import { Card } from "./Card.js";
import {
  initialCards,
  cardsContainer,
  popupEditProfile,
  btnEditProfile,
  popupAddNewPlace,
  btnAddNewPlace,
} from "./Data.js";
import Section from "./Section.js";
import Popup from "./Popup.js";
import PopupWithForm from "./PopupwithForm.js";

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
  cardsContainer.className //cardsContainer
);
console.log(cardsContainer.className);
// popup

const popupProfile = new Popup(".popup_type_edit-profile"); //popupEditProfile
const popupProfileListeners = popupProfile.setEventListeners(btnEditProfile); //btnEditProfile

const popupPlace = new Popup(".popup_type_new-place"); //(popupAddNewPlace
const popupPlaceListeners = popupPlace.setEventListeners(btnAddNewPlace);

// pruebas con form
const form = new PopupWithForm();
const formPopup = form.getInputValues();
