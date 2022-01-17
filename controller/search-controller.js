const api = new Api();

// Request results and loop through the array to populate screen
async function findResult(name) {
  let data = await api.findMovies(name);
  data.Search.forEach((movie) => {
    appendMovieResult(movie);
  });
}
