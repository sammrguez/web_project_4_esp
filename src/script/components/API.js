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
}
/*
function renderResults(userData) {
  userName.textContent = userData.name;
  userAboutMe.textContent = userData.about;
  userAvatar.src = userData.avatar;
}

fetch("https://around.nomoreparties.co/v1/web_es_07/users/me", {
  headers: {
    authorization: "d73ff8a4-5ad7-42cb-999c-d084ca2e6847",
  },
})
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  })
  .then((res) => {
  
    console.log(res);
  })
  .then((res) => {
    userName.textContent = res.name;
    userAboutMe.textContent = res.about;
    userAvatar.src = res.avatar;
  })
  .catch((error) => {
    console.log(`Error: ${error}`);
  });
//cargar Cards
*/
