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
    console.log("desde set user info");
  }
}
