//abrir editar perfil
const btnEditProfile = document.querySelector(".edit-button");
const btnCreateProfile = document.querySelector(".form__submit-button");
const btnCloseEditProfile = document.querySelector(".form__close-button");
const popupEditProfile = document.querySelector(".popup_type_edit-profile");
const resetName = document.querySelector(".profile__user-name");
const resetAboutMe = document.querySelector(".profile__user-profession");
const userNameInput = document.querySelector(".input__text_type_name");
const userProfessionInput = document.querySelector(
  ".input__text_type_about-me"
);

function openEditProfile() {
  if (popupEditProfile.classList.contains("popup_opened")) {
    popupEditProfile.classList.remove("popup_opened");
  } else {
    popupEditProfile.classList.add("popup_opened");
    resetInput();
    setImput();
  }
}

btnEditProfile.addEventListener("click", openEditProfile);

//cerrar editar perfil
function closeEditProfile() {
  if (popupEditProfile.classList.contains("popup_opened")) {
    popupEditProfile.classList.remove("popup_opened");
  } else {
    popupEditProfile.classList.add("popup_opened");
  }
}

btnCloseEditProfile.addEventListener("click", closeEditProfile);

//funciones para asignar información del perfil//
btnCreateProfile.addEventListener("click", handleProfileFormSubmit);

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  resetName.textContent = userNameInput.value;
  resetAboutMe.textContent = userProfessionInput.value;

  //cleanProfile();
  closeEditProfile();
}

//limpiar inputs
function setImput() {
  document.querySelector(".input__text_type_name").value = userNameInput.value;
  document.querySelector(".input__text_type_about-me").value =
    userProfessionInput.value;
}
function resetInput() {
  document.querySelector(".input__text_type_name").value =
    resetName.textContent;
  document.querySelector(".input__text_type_about-me").value =
    resetAboutMe.textContent;
}

/*

//abrir add new place
function openAddNewPlace() {
  if (popupAddNewPlace.classList.contains("popup_opened")) {
    popupAddNewPlace.classList.remove("popup_opened");
  } else {
    popupAddNewPlace.classList.add("popup_opened");
  }
}

btnAddNewPlace.addEventListener("click", openAddNewPlace);
//cerrar add new place
function closeAddNewPlace() {
  if (popupAddNewPlace.classList.contains("popup_opened")) {
    popupAddNewPlace.classList.remove("popup_opened");
  } else {
    popupAddNewPlace.classList.add("popup_opened");
  }
}

btnCloseNewPlace.addEventListener("click", closeAddNewPlace);

//img popup
const cardPhotos = document.querySelectorAll(".place-card__photo");
const popupPhoto = document.querySelector(".popup_type_photo");
const closePopupPhoto = document.querySelector(
  ".form__close-button_type_photo"
);
const popupImgContainer = document.querySelector(".popup__photo");
const photoCaption = document.querySelector(".popup__photo-caption");
const placeCardName = document.querySelectorAll(".place-card__name");

//abrir popup de foto
function openPhoto() {
  if (popupPhoto.classList.contains("popup_opened")) {
    popupPhoto.classList.remove("popup_opened");
  } else {
    popupPhoto.classList.add("popup_opened");
  }
}

function closePhoto() {
  if (popupPhoto.classList.contains("popup_opened")) {
    popupPhoto.classList.remove("popup_opened");
  } else {
    popupPhoto.classList.add("popup_opened");
  }
}
closePopupPhoto.addEventListener("click", closePhoto);
*/
