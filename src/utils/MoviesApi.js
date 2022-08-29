class MoviesApi {

  getMovies() {
    return fetch(`https://api.nomoreparties.co/beatfilm-movies`, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
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
}

export default MoviesApi;
