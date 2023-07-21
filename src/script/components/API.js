import {
  userName,
  popupPhoto,
  userAboutMe,
  userAvatar,
  likeCounter,
  popupDeleteCard,
  api,
} from "../utils/Data";
import { renderCards, addedCardsArray } from "../../index.js";

export class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._authorization = headers.authorization;
  }
  // Profile API
  renderResults(userData) {
    userName.textContent = userData.name;
    userAboutMe.textContent = userData.about;
    userAvatar.src = userData.avatar;
  }
  defaultProfile() {
    fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: this._authorization,
      },
    })
      .then((res) => {
        if (res.ok) {
          //console.log("todo ok");
          return res.json();
        }
        return Promise.reject(res.status);
      })
      .then((res) => {
        this.renderResults(res);
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
      });
  }

  edithProfile(newProfile) {
    fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: this._authorization,
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        name: newProfile.name,
        about: newProfile.about,
      }),
    })
      .then((res) => {
        if (res.ok) {
          console.log("todo ok");
          return res.json();
        }
        return Promise.reject(res.status);
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
      });
  }
  // termina profile functions
  cardsAddedRequest() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: {
        authorization: this._authorization,
      },
    });
  }

  addNewCardPetition(newCard) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: {
        authorization: this._authorization,
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        name: newCard.placeName,
        link: newCard.link,
      }),
    })
      .then((res) =>
        res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)
      )

      .catch((error) => {
        console.log(`Error: ${error}`);
      });
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: {
        authorization: this._authorization,
        "content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          console.log("todo ok");
          return res.json();
        }
        return Promise.reject(res.status);
      })

      .catch((error) => {
        console.log(`Error: ${error}`);
      });
  }
  addLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      headers: {
        authorization: this._authorization,
        "content-Type": "application/json",
      },
    });
  }
  returnCardInfo(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: "GET",
      headers: {
        authorization: this._authorization,
      },
    })
      .then((res) => {
        if (res.ok) {
          console.log("todo ok");
          return res.json();
        }
        return Promise.reject(res.status);
      })

      .catch((error) => {
        console.log(`Error: ${error}`);
      });
  }
}
