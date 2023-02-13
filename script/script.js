//abrir editar perfil
const btnEditProfile = document.querySelector(".edit-button");
const btnCreateProfile = document.querySelector(".form__submit-button");
const btnCloseEditProfile = document.querySelector(".form__close-button");
const popupEditProfile = document.querySelector(".popup_type_edit-profile");

function openEditProfile() {
  if (popupEditProfile.classList.contains("popup_opened")) {
    popupEditProfile.classList.remove("popup_opened");
  } else {
    popupEditProfile.classList.add("popup_opened");
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
  cleanProfile();
  const profileInfoContainer = document.querySelector(".profile__info");
  const userNameInput = document.querySelector(".input__text_type_name");
  const userProfessionInput = document.querySelector(
    ".input__text_type_about-me"
  );
  profileInfoContainer.insertAdjacentHTML(
    "beforeend",
    `<h2 class="profile__user-name">${userNameInput.value}</h2>
  <h3 class="profile__user-profession">${userProfessionInput.value}</h3>`
  );
  cleanInput();

  //limpiar inputs//
  function cleanInput() {
    document.querySelector(".input__text_type_name").value = "Jacques Cousteau";
    document.querySelector(".input__text_type_about-me").value = "Explorador";
  }
}
function cleanProfile() {
  const resetName = document.querySelector(".profile__user-name");
  const resetAboutMe = document.querySelector(".profile__user-profession");
  if (resetName !== null && resetAboutMe !== null) {
    resetName.remove();
    resetAboutMe.remove();
  }
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