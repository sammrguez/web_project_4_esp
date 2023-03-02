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
const popupPhoto = document.querySelector(".popup_type_photo");
// Crear cards
function createCard(name, link) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".place-card").cloneNode(true);
  const cardName = cardElement.querySelector(".place-card__name");
  cardName.textContent = name;
  const cardImg = cardElement.querySelector(".place-card__photo");
  cardImg.src = link;
  cardImg.addEventListener("click", function () {
    handlePopup(popupPhoto);
    openPopupPhoto(cardName.textContent, cardImg.src);
  });
  const trashBtn = cardElement.querySelector(".trash-button");
  trashBtn.addEventListener("click", function () {
    const cardToRemove = trashBtn.closest(".place-card");
    cardToRemove.remove();
  });
  const likeIcon = cardElement.querySelector(".like-button");
  likeIcon.addEventListener("click", function (evt) {
    evt.target.classList.toggle("like-button_active");
  });

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
const userNameInput = document.querySelector(".form__input_type_name");
const userProfessionInput = document.querySelector(
  ".form__input_type_about-me"
);
const btnAddNewPlace = document.querySelector(".add-button");
const btnCloseNewPlace = document.querySelector(
  ".form__close-button_type_new-place"
);
const popupAddNewPlace = document.querySelector(".popup_type_new-place");
const btnSubmitNewPlace = document.querySelector(".form__submit-button_place");

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
btnCloseNewPlace.addEventListener("click", () => {
  handlePopup(popupAddNewPlace);
  resetImput();
});
btnSubmitNewPlace.addEventListener("click", handleNewPlaceFormSubmit);

//funciones para asignar información del perfil//
btnCreateProfile.addEventListener("click", handleProfileFormSubmit);

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  resetName.textContent = userNameInput.value;
  resetAboutMe.textContent = userProfessionInput.value;
  handlePopup(popupEditProfile);
}

//funciones new place

const placeNameInput = document.querySelector(".form__input_type_place-name");
const imageLinkInput = document.querySelector(".form__input_type_photo-link");

function handleNewPlaceFormSubmit(evt) {
  evt.preventDefault();
  const AddedCard = createCard(placeNameInput.value, imageLinkInput.value);
  cardsContainer.prepend(AddedCard);
  handlePopup(popupAddNewPlace);
  placeNameInput.value = "";
  imageLinkInput.value = "";
}

//zoom imagen
const btnClosePhoto = document.querySelector(".form__close-button_type_photo");
btnClosePhoto.addEventListener("click", () => handlePopup(popupPhoto));

function openPopupPhoto(name, link) {
  const linkPopup = document.querySelector(".popup__photo");
  linkPopup.src = link;
  const captionPopup = document.querySelector(".popup__photo-caption");
  captionPopup.textContent = name;
}
