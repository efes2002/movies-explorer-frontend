import film1 from "../images/pic__COLOR_pic.png";

const testFilms = [
  {id: 1, savedFilm: false, img: film1, title: 'Фильм1', time: '1ч 17м'},
  {id: 2, savedFilm: true, img: film1, title: 'Фильм2', time: '1ч 1м'},
  {id: 3, savedFilm: false, img: film1, title: 'Фильм3', time: '1ч 17м'},
  {id: 4, savedFilm: true, img: film1, title: 'Фильм4', time: '1ч 17м'},
  {id: 5, savedFilm: false, img: film1, title: 'Фильм5', time: '1ч 17м'},
  {id: 6, savedFilm: true, img: film1, title: 'Фильм6', time: '2ч 17м'},
  {id: 7, savedFilm: true, img: film1, title: 'Фильм7', time: '1ч 17м'},
  {id: 8, savedFilm: true, img: film1, title: 'Фильм8', time: '1ч 27м'},
  {id: 9, savedFilm: true, img: film1, title: 'Фильм9', time: '4ч 17м'},
  {id: 10, savedFilm: false, img: film1, title: 'Фильм10', time: '1ч 67м'},
  {id: 11, savedFilm: false, img: film1, title: 'Фильм11', time: '5ч 17м'},
  {id: 12, savedFilm: false, img: film1, title: 'Фильм12', time: '1ч 17м'},
  {id: 13, savedFilm: true, img: film1, title: 'Фильм13', time: '1ч 17м'},
  {id: 14, savedFilm: true, img: film1, title: 'Фильм14', time: '1ч 17м'},
  {id: 15, savedFilm: true, img: film1, title: 'Фильм15', time: '1ч 17м'},
  {id: 16, savedFilm: true, img: film1, title: 'Фильм16', time: '1ч 17м'},
  {id: 17, savedFilm: true, img: film1, title: 'Фильм17', time: '1ч 17м'},
  {id: 18, savedFilm: true, img: film1, title: 'Фильм18', time: '1ч 17м'},
  {id: 19, savedFilm: false, img: film1, title: 'Фильм19', time: '1ч 17м'},
  {id: 20, savedFilm: false, img: film1, title: 'Фильм20', time: '1ч 67м'},
  {id: 21, savedFilm: false, img: film1, title: 'Фильм21', time: '5ч 17м'},
  {id: 22, savedFilm: false, img: film1, title: 'Фильм22', time: '1ч 17м'},
  {id: 23, savedFilm: true, img: film1, title: 'Фильм23', time: '1ч 17м'},
  {id: 24, savedFilm: true, img: film1, title: 'Фильм24', time: '1ч 17м'},
  {id: 25, savedFilm: true, img: film1, title: 'Фильм25', time: '1ч 17м'},
  {id: 26, savedFilm: true, img: film1, title: 'Фильм26', time: '1ч 17м'},
  {id: 27, savedFilm: true, img: film1, title: 'Фильм27', time: '1ч 17м'},
  {id: 28, savedFilm: true, img: film1, title: 'Фильм28', time: '1ч 17м'},
  {id: 29, savedFilm: false, img: film1, title: 'Фильм29', time: '1ч 17м'},
]
/*
const testFilms2 = [
  {id: 1, savedFilm: false, img: film1, title: 'Фильм1', time: '1ч 17м'},
  {id: 2, savedFilm: true, img: film1, title: 'Фильм2', time: '1ч 1м'},
  {id: 3, savedFilm: false, img: film1, title: 'Фильм3', time: '1ч 17м'},
  {id: 4, savedFilm: true, img: film1, title: 'Фильм4', time: '1ч 17м'},
  {id: 5, savedFilm: false, img: film1, title: 'Фильм5', time: '1ч 17м'},
  {id: 6, savedFilm: true, img: film1, title: 'Фильм6', time: '2ч 17м'},
  {id: 7, savedFilm: true, img: film1, title: 'Фильм7', time: '1ч 17м'},
  {id: 8, savedFilm: true, img: film1, title: 'Фильм8', time: '1ч 27м'},
  {id: 9, savedFilm: true, img: film1, title: 'Фильм9', time: '4ч 17м'},
  {id: 10, savedFilm: false, img: film1, title: 'Фильм10', time: '1ч 67м'},
  {id: 11, savedFilm: false, img: film1, title: 'Фильм11', time: '5ч 17м'},
  {id: 12, savedFilm: false, img: film1, title: 'Фильм12', time: '1ч 17м'},
  {id: 13, savedFilm: true, img: film1, title: 'Фильм13', time: '1ч 17м'},
  {id: 14, savedFilm: true, img: film1, title: 'Фильм14', time: '1ч 17м'},
  {id: 15, savedFilm: true, img: film1, title: 'Фильм15', time: '1ч 17м'},
  {id: 16, savedFilm: true, img: film1, title: 'Фильм16', time: '1ч 17м'},
  {id: 17, savedFilm: true, img: film1, title: 'Фильм17', time: '1ч 17м'},
  {id: 18, savedFilm: true, img: film1, title: 'Фильм18', time: '1ч 17м'},
  {id: 19, savedFilm: false, img: film1, title: 'Фильм19', time: '1ч 17м'},
  {id: 20, savedFilm: false, img: film1, title: 'Фильм20', time: '1ч 67м'},
  {id: 21, savedFilm: false, img: film1, title: 'Фильм21', time: '5ч 17м'},
  {id: 22, savedFilm: false, img: film1, title: 'Фильм22', time: '1ч 17м'},
  {id: 23, savedFilm: true, img: film1, title: 'Фильм23', time: '1ч 17м'},
  {id: 24, savedFilm: true, img: film1, title: 'Фильм24', time: '1ч 17м'},
  {id: 25, savedFilm: true, img: film1, title: 'Фильм25', time: '1ч 17м'},
  {id: 26, savedFilm: true, img: film1, title: 'Фильм26', time: '1ч 17м'},
  {id: 27, savedFilm: true, img: film1, title: 'Фильм27', time: '1ч 17м'},
  {id: 28, savedFilm: true, img: film1, title: 'Фильм28', time: '1ч 17м'},
  {id: 29, savedFilm: false, img: film1, title: 'Фильм29', time: '1ч 17м'},
]
*/
export default testFilms;
