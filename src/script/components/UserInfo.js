import { userName, userAboutMe } from "../utils/Data.js";
export default class userInfo {
  constructor({ data }) {
    this._userName = data.name;
    this._userAboutMe = data["about-me"];
  }
  getUserInfo() {
    this._userName = userName.textContent;
    this._userAboutMe = userAboutMe.textContent;
  }

  setUserInfo() {
    userName.textContent = this._userName;
    userAboutMe.textContent = this._userAboutMe;
  }
}
fetch("https://around.nomoreparties.co/v1/web_es_07/users/me", {
  method: "PATCH",
  headers: {
    authorization: "d73ff8a4-5ad7-42cb-999c-d084ca2e6847",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: `${userName.textContent}`,
    about: `${userAboutMe.textContent}`,
  }),
});
