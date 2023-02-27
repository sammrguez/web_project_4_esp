const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];
const cardsContainer = document.querySelector(".card-container");
// Crear cards
function createCard(name, link) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".place-card").cloneNode(true);
  const cardName = cardElement.querySelector(".place-card__name");
  cardName.textContent = name;
  const cardImg = cardElement.querySelector(".place-card__photo");
  cardImg.src = link;
  const trashIcon = cardElement.querySelector(".trash-icon");
  trashIcon.src = "images/Trash-icon.svg";
  const likeIcon = cardElement.querySelector(".like__icon");
  likeIcon.src = "images/like-icon.svg";
  return cardElement;
}
initialCards.forEach(function (card) {
  const newCard = createCard(card.name, card.link);
  cardsContainer.append(newCard);
});

//constantes universales
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
const btnAddNewPlace = document.querySelector(".add-button");
const btnCloseNewPlace = document.querySelector(
  ".form__close-button_type_new-place"
);
const popupAddNewPlace = document.querySelector(".popup_type_new-place");

//funciones para abrir popup template
function handlePopup(popup) {
  popup.classList.toggle("popup_opened");
}

//event listeners
btnEditProfile.addEventListener("click", () => handlePopup(popupEditProfile));
btnCloseEditProfile.addEventListener("click", () =>
  handlePopup(popupEditProfile)
);
btnAddNewPlace.addEventListener("click", () => handlePopup(popupAddNewPlace));
btnCloseNewPlace.addEventListener("click", () => handlePopup(popupAddNewPlace));

//funciones para asignar información del perfil//
btnCreateProfile.addEventListener("click", handleProfileFormSubmit);

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  resetName.textContent = userNameInput.value;
  resetAboutMe.textContent = userProfessionInput.value;
  handlePopup(popupEditProfile);
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
//funciones new place

/*





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
