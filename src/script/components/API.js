import {
  userName,
  popupPhoto,
  userAboutMe,
  userAvatar,
  likeCounter,
  popupDeleteCard,
} from "../utils/Data";
import Section from "./Section.js";
import { Card, cardsContainer } from "./Card.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm";
export class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._authorization = headers.authorization;
  }

  getCards() {
    const cardsBuenas = [];
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
        console.log(res);
        this.tester(res);
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
      });
  }

  tester(arraylist) {
    const cardsBuenas = [];
    arraylist.forEach((obj) => {
      const cardApi = {
        name: obj.name,
        link: obj.link,
        id: obj._id,
        likes: obj.likes,
      };
      cardsBuenas.push(cardApi);

      // console.log(cardApi);
    });
    //console.log(cardsBuenas);
    const defaultCardList = new Section(
      {
        items: cardsBuenas,
        renderer: (item) => {
          const card = new Card(
            {
              data: item,
              photoHandler: (src, name) => {
                const photo = new PopupWithImage(popupPhoto);
                const newPhoto = photo.open(src, name);
              },
              deleteHandler: (cardId, openForm) => {
                const popupDelete = new PopupWithForm(
                  {
                    formSubmitHandler: () => {
                      const deleteApi = new Api({
                        baseUrl:
                          "https://around.nomoreparties.co/v1/web_es_07/",
                        headers: {
                          authorization: "d73ff8a4-5ad7-42cb-999c-d084ca2e6847",
                          "content-Type": "application/json",
                        },
                      });
                      deleteApi.deleteCard(cardId);
                    },
                  },
                  popupDeleteCard
                );
                popupDelete.aceptForm(openForm);
                // console.log("desde API delete handler");
              },
            },
            "#card-template"
          );
          const newCard = card.generateCard();
          defaultCardList.addItem(newCard);
        },
      },
      cardsContainer
    );
    defaultCardList.renderItems();
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
  deleteCard(cardId) {
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
        console.log(res);
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
      });
  }
}
