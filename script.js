//abrir editar perfil
const btnEditProfile = document.querySelector(".edit-button");
const popupEditProfile = document.querySelector(".popup_type_edit-profile");
const btnCloseEditProfile = document.querySelector(".form__close-button");

function openEditProfile() {
  cleanInput();
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

const btnAddNewPlace = document.querySelector(".add-button");
const popupAddNewPlace = document.querySelector(".popup_type_new-place");
const btnCloseNewPlace = document.querySelector(
  ".form__close-button_type_new-place"
);
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
//asignando a cada photo como botón
cardPhotos.forEach((photo) => {
  photo.addEventListener("click", openPhoto);
});
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

//submit
function openEditProfile() {
  cleanInput();
  if (popupEditProfile.classList.contains("popup_opened")) {
    popupEditProfile.classList.remove("popup_opened");
  } else {
    popupEditProfile.classList.add("popup_opened");
  }
}

//funciones para asignar información del perfil//
const profileInfo = document.querySelector(".profile__info");
const btnCreateProfile = document.querySelector(".form__submit-button");

btnCreateProfile.addEventListener("click", createProfile);

function createProfile() {
  cleanProfile();

  let userNameInput = document.querySelector(".input__text_type_name");
  let userProfessionInput = document.querySelector(
    ".input__text_type_about-me"
  );

  profileInfo.insertAdjacentHTML(
    "beforeend",
    `<h2 class="profile__user-name">${userNameInput.value}</h2>
  <h3 class="profile__user-profession">${userProfessionInput.value}</h3>`
  );

  cleanInput();
  closeEditProfile();
}

btnCreateProfile.addEventListener("click", createProfile);

// Reset de perfil en html
function cleanProfile() {
  const resetName = document.querySelector(".profile__user-name");
  const resetAboutMe = document.querySelector(".profile__user-profession");
  if (resetName !== null && resetAboutMe !== null) {
    resetName.remove();
    resetAboutMe.remove();
    console.log("function working");
  }
}

//limpiar inputs//
function cleanInput() {
  document.querySelector(".input__text_type_name").value = "Jacques Cousteau";
  document.querySelector(".input__text_type_about-me").value = "Explorador";
}

// insertar cards
const photoGrid = document.querySelector(".photo-grid");
const btnSubmitNewPlace = document.querySelector(".form__submit-button_place");

function createNewPlace() {
  const placeNameInput = document.querySelector(".input__text_type_place-name");
  const placeImgLinkInput = document.querySelector(
    ".input__text_type_photo-link"
  );

  photoGrid.insertAdjacentHTML(
    "afterbegin",
    ` <div class="place-card">
    <img class="place-card__photo"
     src="${placeImgLinkInput.value}"
     />
    <div class="trash">
      <img
        class="trash-icon"
        src="images/Trash-icon.svg"
        alt="icono de bote de basura"
      />
    </div>
  <div class="place-card__info-container">
    <h3 class="place-card__name">${placeNameInput.value}</h3>
    <div class="like">
      <img
        class="like__icon"
        src="images/like-icon.svg"
        alt="icono de like"
      />
    </div>
  </div>
  </div>`
  );

  cleanInputPlace();
  closeAddNewPlace();
}
btnSubmitNewPlace.addEventListener("click", createNewPlace);
//limpiar inputs
function cleanInputPlace() {
  document.querySelector(".input__text_type_place-name").value = "";
  document.querySelector(".input__text_type_photo-link").value = "";
}
