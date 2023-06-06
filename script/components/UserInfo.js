import { userNameInput, userProfessionInput } from "./Data.js";

export default class UserInfo {
  constructor({ userData }) {
    this._userName = userData.name;
    this._userAboutMe = userData.profession;
  }
  getUserInfo() {
    console.log(this._userName);
    console.log(this._userAboutMe);
    //this._userInfoValues = {

    //userNameInput.value = this._userName.textContent;
    //      userProfessionInput.value = this._userAboutMe.textContent;
    // };
  }
  setUserInfo() {
    this._userName.textContent = userNameInput.value;
    this._userAboutMe.textContent = userProfessionInput.value;
  }
}
