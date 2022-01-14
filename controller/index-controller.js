const catalog = new Catalog();
const api = new Api();

// request movie data from API and append on screen
async function populateScreen() {
  let movies = catalog.getCatalog();
  for (let i = 0; i < movies.length; i++) {
    let data = await api.findMovieID(movies[i]);
    if (i != 0) {
      appendMovieOnScreen(data);
    } else {
      appendOurChoiceMovie(data);
    }
  }
}

populateScreen();
