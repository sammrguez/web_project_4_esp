import { Card } from "./Card.js";
import {
  initialCards,
  cardsContainer,
  btnEditProfile,
  btnAddNewPlace,
  popupEditProfile,
  popupAddNewPlace,
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
  cardsContainer
);
// popup

const popupProfile = new Popup(popupEditProfile); //popupEditProfile
const popupProfileListeners = popupProfile.setEventListeners(btnEditProfile);

const popupPlace = new Popup(popupAddNewPlace); //popupAddNewPlace
const popupPlaceListeners = popupPlace.setEventListeners(btnAddNewPlace);

// Probando forms
const form = new PopupWithForm(popupAddNewPlace);
const formPopup = form.getInputValues();
