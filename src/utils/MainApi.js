class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }


  addNewUser({name, email, password}) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: String(name),
        password: String(password),
        email: String(email)
      })
    })
      .then((res) => {
        try {
          if ((res.status === 200) || (res.status === 201)) {
            return res.json();
          }
        } catch(e){
          return (e)
        }
      })
      .then((data) => {
        return data;
      })
      .catch((err) => console.log(err));
  }

  authUser({email, password}) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        password: String(password),
        email: String(email)
      })
    })
      .then((res) => {
        try {
          if ((res.status === 200) || (res.status === 201)) {
            return res.json();
          }
        } catch (e) {
          return e;
        }
      })
      .then((data) => {
        return data;
      })
  }

  validUser(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`
      }
    })
      .then((res) => {
        try {
          if ((res.status === 200) || (res.status === 201)) {
            return res.json();
          }
        } catch (e) {
          return (e)
        }
      })
      .then((data) => {
        if (data.email) {
          return data;
        }
        else {return;}
      })
      .catch((err) => console.log(err));
  }

  editProfile({name, email}) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: String(name),
        email: String(email)
      })
    })
      .then(this._checkResponse);
  }


  getMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'GET',
      headers: this._headers
    })
      .then(this._checkResponse);
  }

  addMovie(movie) {
    console.log(12, movie)

    const {
      movieId,
      country,
      director,
      duration,
      year,
      description,
      image,
      trailerLink,
      thumbnail,
      nameRU,
      nameEN,
    } = movie;

    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        country: String(country),
        director: String(director),
        duration: Number(duration),
        year: Number(year),
        description: String(description),
        image: String(image),
        trailerLink: String(trailerLink),
        thumbnail: String(thumbnail),
        movieId: Number(movieId),
        nameRU: String(nameRU),
        nameEN: String(nameEN),
      })
    })
      .then(this._checkResponse);
  }

  deleteMovie(id) {
    return fetch(`${this._baseUrl}/movies/${id}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(this._checkResponse);
  }

  _checkResponse(res) {
    if (res.ok) { return res.json(); }
    return Promise.reject(`Ошибка: ${res.status}`);
  }




}

export default MainApi;
