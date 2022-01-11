class Api {
  #urlOMDB = `https://www.omdbapi.com/?apikey=c30ccb91&`;

  // fetch data based on URL
  fetchURL(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }

  // Fetch movies based on title
  async findMovieTitle(title) {
    let url = `${this.#urlOMDB}t=${title}`;
    let data = await this.fetchURL(url);
    console.log(data);
  }

  // fecth movies based on ID
  async findMovieID(id) {
    let url = `${this.#urlOMDB}i=${id}`;
    let data = await this.fetchURL(url);
    console.log(data);
  }

  // fetch CEP (ZIP code from brazil) based o CEP
  async buscaCEP(cep) {
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    let data = await this.fetchURL(url);
    console.log(data);
  }
}
