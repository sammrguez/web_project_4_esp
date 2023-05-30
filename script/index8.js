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
  ".card-container" //cardsContainer
);

// popup

const popupProfile = new Popup(".popup_type_edit-profile"); //popupEditProfile
const popupProfileListeners = popupProfile.setEventListeners(btnEditProfile);

const popupPlace = new Popup(".popup_type_new-place"); //popupAddNewPlace
const popupPlaceListeners = popupPlace.setEventListeners(btnAddNewPlace);
