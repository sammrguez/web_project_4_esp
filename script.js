const btnEditProfile = document.querySelector(".edit-button");
const popupEditProfile = document.querySelector(".popup_type_edit-profile");
const btnCloseEditProfile = document.querySelector(
  ".form__close-button_type_edit-profile"
);

console.log(popupEditProfile);

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
