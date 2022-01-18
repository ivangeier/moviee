class Api {
  #urlOMDB;

  constructor() {
    this.#urlOMDB = `https://www.omdbapi.com/?apikey=c30ccb91&`;
  }

  // fetch data based on URL
  fetchURL(url) {
    return fetch(url)
      .then((res) => res.json())
      .then((data) => data)
      .catch((error) => {
        return { error: error };
      });
  }

  // request movies based on title
  findMovieTitle(title) {
    let url = `${this.#urlOMDB}t=${title}`;
    let data = this.fetchURL(url);
    return data;
  }

  // request movies based on ID
  findMovieID(id) {
    let url = `${this.#urlOMDB}i=${id}`;
    let data = this.fetchURL(url);
    return data;
  }

  // fetch all movies based on name/ part of name
  findMovies(name) {
    let url = `${this.#urlOMDB}s=${name}`;
    let data = this.fetchURL(url);
    return data;
  }

  // fetch CEP (ZIP code from brazil) based on CEP
  buscaCEP(cep) {
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    let data = this.fetchURL(url);
    return data;
  }
}
