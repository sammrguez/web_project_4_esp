//funciones para abrir y cerrrar popups//
const btnEditProfile = document.querySelector(".edit-button");
const popupEditProfile = document.querySelector(".popup_type_edit-profile");
const btnCloseEditProfile = document.querySelector(
  ".form__close-button_type_edit-profile"
);

function openEditProfile() {
  cleanInput();
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

//funciones para asignar información del perfil//

const profileInfo = document.querySelector(".profile__info");
const btnCreateProfile = document.querySelector(".form__submit-button_edit");

btnCreateProfile.addEventListener("click", createProfile);

let userName = document.querySelector(".form__item_type_name");
let userProfession = document.querySelector(".profile__user-profession");

function createProfile() {
  cleanProfile();

  let userName = document.querySelector(".form__item_type_name");
  let userProfession = document.querySelector(".form__item_type_about-me");

  profileInfo.insertAdjacentHTML(
    "beforeend",
    `<h2 class="profile__user-name">${userName.value}</h2>
  <h3 class="profile__user-profession">${userProfession.value}</h3>`
  );

  cleanInput();
  closeEditProfile();
}

btnCreateProfile.addEventListener("click", createProfile);

// Elimina los cursos del carrito en el DOM
function cleanProfile() {
  const element1 = document.querySelector(".profile__user-name");
  const element2 = document.querySelector(".profile__user-profession");
  if (element1 !== null && element2 !== null) {
    element1.remove();
    element2.remove();
    console.log("function working");
  }

  console.log(element1);
  console.log(element2);
  console.log("nulls");
}

function cleanInput() {
  document.querySelector(".form__item_type_name").value = "";
  document.querySelector(".form__item_type_about-me").value = "";
}
