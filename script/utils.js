import {
  btnEditProfile,
  popupEditProfile,
  btnCreateProfile,
  btnCloseEditProfile,
  btnAddNewPlace,
  popupAddNewPlace,
  btnSubmitNewPlace,
  btnCloseNewPlace,
  userNameInput,
  userProfessionInput,
  userName,
  userAboutMe,
  btnClosePhoto,
} from "./Data.js";
//funciones para abrir popup template

function handlePopup(popup) {
  popup.classList.toggle("popup_opened");
}

//event listeners
btnEditProfile.addEventListener("click", () => {
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
const placeNameInput = document.querySelector("#place-name-input");
const imageLinkInput = document.querySelector("#photo-link-input");

function handleNewPlaceFormSubmit(evt) {
  evt.preventDefault();
  const addedCard = createCard(placeNameInput.value, imageLinkInput.value);
  cardsContainer.prepend(addedCard);
  handlePopup(popupAddNewPlace);
  document.forms.place.reset();
  const btnForm = document.querySelector("#new-place");
  btnForm.classList.add("form__submit-button_inactive");
  btnForm.setAttribute("disable", true);
}

btnClosePhoto.addEventListener("click", () => handlePopup(popupPhoto));

function openPopupPhoto(name, link) {
  const linkPopup = document.querySelector(".popup__photo");
  linkPopup.src = link;
  const captionPopup = document.querySelector(".popup__photo-caption");
  captionPopup.textContent = name;
}
