const btnEditProfile = document.querySelector(".edit-button");
const popupEditProfile = document.querySelector(".popup_type_edit-profile");
const btnCloseEditProfile = document.querySelector(
  ".form__close-button_type_edit-profile"
);

function openEditProfile() {
  if (popupEditProfile.classList.contains("popup_opened")) {
    popupEditProfile.classList.remove("popup_opened");
  } else {
    popupEditProfile.classList.add("popup_opened");
  }
}

btnEditProfile.addEventListener("click", openEditProfile);

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

function openAddNewPlace() {
  if (popupAddNewPlace.classList.contains("popup_opened")) {
    popupAddNewPlace.classList.remove("popup_opened");
  } else {
    popupAddNewPlace.classList.add("popup_opened");
  }
}

btnAddNewPlace.addEventListener("click", openAddNewPlace);

function closeAddNewPlace() {
  if (popupAddNewPlace.classList.contains("popup_opened")) {
    popupAddNewPlace.classList.remove("popup_opened");
  } else {
    popupAddNewPlace.classList.add("popup_opened");
  }
}

btnCloseNewPlace.addEventListener("click", closeAddNewPlace);
