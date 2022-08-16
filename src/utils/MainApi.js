class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      credentials: 'include'
    })
      .then(this._checkResponse);
  }

  getSavedCards() {
    return fetch(`${this._baseUrl}/movies`, {
      credentials: 'include'
    })
      .then(this._checkResponse);
  }

  setUserInfo({ name, email }) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        email: email
      })
    })
      .then(this._checkResponse);
  }

  saveCard({ country, director, duration, year, description, image, trailerLink, nameRU, nameEN, thumbnail, movieId }) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        country, director, duration, year, description, image, trailerLink, nameRU, nameEN, thumbnail, movieId
      })
    })
      .then(this._checkResponse);
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/movies/${cardId}`, {
      method: 'DELETE',
      credentials: 'include'
    })
      .then(this._checkResponse);
  }

  register(password, email, name) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ password, email, name })
    })
      .then(this._checkResponse)
      .then((res) => {
        return res;
      })
  };

  authorize(password, email) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ password, email })
    })
      .then(this._checkResponse)
      .then((data) => {
        if (data.token) {
          localStorage.setItem('jwt', data.token);
          return data;
        }
      })
  };

  getContent() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(this._checkResponse)
      .then(data => data)
  }

  logout() {
    return fetch(`${this._baseUrl}/signout`, {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(this._checkResponse);
  }
}

const mainApi = new MainApi({
  baseUrl: 'https://api.moviesexplorer.german.nomoredomains.xyz',
  headers: {
    'Content-Type': 'application/json'
  }
}
);

export default mainApi;