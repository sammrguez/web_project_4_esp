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
const userNameInput = document.querySelector("#name-input");
const userProfessionInput = document.querySelector("#about-me-input");
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
btnEditProfile.addEventListener("click", () => {
  handlePopup(popupEditProfile);
  resetImputs();
});
btnCloseEditProfile.addEventListener("click", () => {
  handlePopup(popupEditProfile);
  resetImputs();
});
btnAddNewPlace.addEventListener("click", () => handlePopup(popupAddNewPlace));
btnCloseNewPlace.addEventListener("click", () => {
  handlePopup(popupAddNewPlace);
});
btnSubmitNewPlace.addEventListener("click", handleNewPlaceFormSubmit);

//funciones para asignar información del perfil//
btnCreateProfile.addEventListener("click", handleProfileFormSubmit);

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  resetName.textContent = userNameInput.value;
  resetAboutMe.textContent = userProfessionInput.value;
  handlePopup(popupEditProfile);
  resetImputs();
}

function resetImputs() {
  userNameInput.value = resetName.textContent;
  userProfessionInput.value = resetAboutMe.textContent;
}

//funciones new place

const placeNameInput = document.querySelector("#place-name-input");
const imageLinkInput = document.querySelector(".form__input_type_photo-link");

function handleNewPlaceFormSubmit(evt) {
  evt.preventDefault();
  const addedCard = createCard(placeNameInput.value, imageLinkInput.value);
  cardsContainer.prepend(addedCard);
  handlePopup(popupAddNewPlace);
  placeNameInput.value = "";
  imageLinkInput.value = "";
}

//zoom imagen
const btnClosePhoto = document.querySelector(".popup__close-button");
btnClosePhoto.addEventListener("click", () => handlePopup(popupPhoto));

function openPopupPhoto(name, link) {
  const linkPopup = document.querySelector(".popup__photo");
  linkPopup.src = link;
  const captionPopup = document.querySelector(".popup__photo-caption");
  captionPopup.textContent = name;
}

//Cambiar estilos de campo

const showError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add("form__input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("form__input-error_active");
};

const hideError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("form__input_type_error");
  errorElement.classList.remove("form__input-error_active");
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideError(formElement, inputElement);
  }
};

//habilitando y desabilitando submit

const hasInvalidInput = (inputsList) => {
  return inputsList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleBtnState = (inputsList, btnElement) => {
  if (hasInvalidInput(inputsList)) {
    btnElement.classList.add("form__submit-button_inactive");
  } else {
    btnElement.classList.remove("form__submit-button_inactive");
  }
};
//Event Listeners

const setEventListeners = (formElement) => {
  const inputsList = Array.from(formElement.querySelectorAll(".form__input"));
  const btnElement = formElement.querySelector(".form__submit-button");
  inputsList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
      toggleBtnState(inputsList, btnElement);
    });
  });
};

const enableValidation = () => {
  const formsList = Array.from(document.querySelectorAll(".form"));
  formsList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement);
  });
};

enableValidation();
