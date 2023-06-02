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
} from "../utils/Data.js";
import { generateInputCard } from "../pages/index.js";

//funciones para abrir popup template

//event listeners

// funciones perfil
/*function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  userName.textContent = userNameInput.value;
  userAboutMe.textContent = userProfessionInput.value;
  handlePopup(popupEditProfile);
  resetImputs();
}
*/
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

/*const closeForms = () => {
  const popups = Array.from(document.querySelectorAll(".popup"));
  popups.forEach((popup) => {
    popup.addEventListener("click", function (evt) {
      popup.classList.remove("popup_opened");
      evt.stopImmediatePropagation();
    });
  });
};

closeForms();*/
