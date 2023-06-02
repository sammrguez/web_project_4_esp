import { userNameInput, userProfessionInput } from "./Data.js";

export default class userInfo {
  constructor({ userData }) {
    this._userName = userData.userName;
    this._userAboutMe = userData.userAboutMe;
  }
  getUserInfo() {
    console.log(userNameInput.value);
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
