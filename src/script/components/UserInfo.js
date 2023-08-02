import { userName, userAboutMe } from "../utils/Data.js";
export class UserInfo {
  constructor(inputNameSelector, inputAboutSelector) {
    this._userName = document.querySelector(inputNameSelector);
    this._userAboutMe = document.querySelector(inputAboutSelector);
  }
  getUserInfo() {
    this._userName.value = userName.textContent;
    this._userAboutMe.value = userAboutMe.textContent;
  }

  setUserInfo() {
    userName.textContent = this._userName.value;
    userAboutMe.textContent = this._userAboutMe.value;
  }
}
