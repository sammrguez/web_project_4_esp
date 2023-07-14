import { userName, userAboutMe, userAvatar, likeCounter } from "../utils/Data";

export class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._authorization = headers.authorization;
  }

  getCards() {
    fetch(`${this._baseUrl}/cards`, {
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
      .then((res) => {
        this.getCardsList(res);
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
      });
  }

  getCardsList(cardList = []) {
    const testapi = Array.from(cardList);
    console.log(testapi);
    return testapi;
    /*const cardListArray = [];
    cardList.forEach((card) => {
      cardListArray.push(card);
    });*/

    //console.log(cardListArray);
    //return cardListArray;
  }
  getArray() {
    const initial = [];
    initial = this.getCardsList();
    console.log(initial);
  }
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
          console.log("todo ok");
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
  addNewCard(newCard) {
    fetch(`${this._baseUrl}/cards`, {
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

  like(cardId, likes) {
    fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: "PATCH",
      headers: {
        authorization: this._authorization,
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: likes,
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
        return res._id;
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
      });
  }
  deleteCard() {
    fetch(`${this._baseUrl}/cards/${cardId}`, {
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
      .then((res) => {
        return res._id;
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
      });
  }
}
