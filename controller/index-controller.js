const catalog = new Catalog();
const api = new Api();

// load catalog on screen - request movie data from API and append on screen
async function populateScreen() {
  let movies = catalog.getCatalog();
  for (let movie of movies) {
    let data = await api.findMovieID(movie);
    appendMovieOnScreen(data);
  }
}

populateScreen();
