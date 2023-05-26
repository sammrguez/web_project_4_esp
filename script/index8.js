import { Card } from "./Card.js";
import { initialCards, cardsContainer, popupEditProfile } from "./Data.js";
import Section from "./Section.js";
import Popup from "./Popup.js";
//Section
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
// Popup
const profilePopup = new Popup(popupEditProfile);
profilePopup.setEventListeners;
btnEditProfile.addEventListener("click", () => {
  handlePopup(popupEditProfile);
  resetImputs();
});
