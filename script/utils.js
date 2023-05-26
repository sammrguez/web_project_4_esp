import {
  btnEditProfile,
  popupEditProfile,
  btnCreateProfile,
  btnCloseEditProfile,
  btnAddNewPlace,
  popupAddNewPlace,
  popupPhoto,
  btnSubmitNewPlace,
  btnCloseNewPlace,
  userNameInput,
  userProfessionInput,
  userName,
  userAboutMe,
  btnClosePhoto,
  cardsContainer,
} from "./Data.js";
import { generateInputCard } from "./index.js";

//funciones para abrir popup template

export function handlePopup(popup) {
  popup.classList.toggle("popup_opened");
}

//event listeners
/*btnEditProfile.addEventListener("click", () => {
  handlePopup(popupEditProfile);
  resetImputs();
});
btnCloseEditProfile.addEventListener("click", () => {
  handlePopup(popupEditProfile);
  resetImputs();
});
btnAddNewPlace.addEventListener("click", () => {
  handlePopup(popupAddNewPlace);
});

btnCloseNewPlace.addEventListener("click", () => {
  handlePopup(popupAddNewPlace);
});

btnSubmitNewPlace.addEventListener("click", handleNewPlaceFormSubmit);
btnCreateProfile.addEventListener("click", handleProfileFormSubmit);
*/
// funciones perfil
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  userName.textContent = userNameInput.value;
  userAboutMe.textContent = userProfessionInput.value;
  handlePopup(popupEditProfile);
  resetImputs();
}

function resetImputs() {
  userNameInput.value = userName.textContent;
  userProfessionInput.value = userAboutMe.textContent;
}

//funciones new place

function handleNewPlaceFormSubmit(evt) {
  evt.preventDefault();
  generateInputCard();
  handlePopup(popupAddNewPlace);
  document.forms.place.reset();

  const btnForm = document.querySelector("#new-place");
  btnForm.classList.add("form__submit-button_inactive");
  btnForm.setAttribute("disable", true);
}

//cerrando forms
const closeFromEsc = (popup) => {
  document.addEventListener("keydown", function (evt) {
    if (evt.key === "Escape") {
      popup.classList.remove("popup_opened");
    }
  });
};

const closeForms = () => {
  const popups = Array.from(document.querySelectorAll(".popup"));
  popups.forEach((popup) => {
    popup.addEventListener("click", function (evt) {
      const popup = evt.target;
      popup.classList.remove("popup_opened");
      evt.stopImmediatePropagation();
    });
    closeFromEsc(popup);
  });
};

closeForms();
