import { userName, userAboutMe, userAvatar } from "../utils/Data";

export class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._authorization = headers.authorization;
  }
  test() {
    console.log(this._authorization);
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
}
