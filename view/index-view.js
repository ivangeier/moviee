// Show movies on screen
function appendMovieOnScreen(movie) {
  $('.catalog').append(`
  <img class="poster" src="${movie.Poster}" alt="movie poster" id="${movie.imdbID}">
  `);
}
