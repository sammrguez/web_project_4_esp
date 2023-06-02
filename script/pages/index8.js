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
import PopupWithForm from "./PopupwithForm.js";
import submitForm from "./SubmitForm.js";
import userInfo from "./UserInfo.js";
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

const formProfile = new PopupWithForm(
  {
    formSubmitHandler: (formData) => {
      const User = new userInfo({ formData });
    },
  },
  popupEditProfile
);

console.log(user.getUserInfo());
const formgenerate = formProfile.setEventListeners(btnEditProfile);

const formPlace = new PopupWithForm(popupAddNewPlace);
const formPlaceGenerate = formPlace.setEventListeners(btnAddNewPlace);

const submit = new submitForm({
  popup: popupEditProfile,
  handleFormSubmit: (formData) => {},
});
const submit2 = submit.generateForm();
