let mainCatalog = document.querySelector('.catalog');
let ourChoice = document.querySelector('.ourChoice');

// Create movie catalog HTML and append on catalog div
function appendMovieOnScreen(movie) {
  mainCatalog.insertAdjacentHTML(
    'beforeend',
    `
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img class='d-flex w-100 h-100 poster' src="${movie.Poster}" alt="movie poster">
        </div>
        <div class="flip-card-back d-flex flex-column w-10 h-100 align-items-center justify-content-center p-3">
          <h3 class='text-warning'>${movie.Title}</h3>
          <p class='text-secondary'>${movie.Plot}</p>
          <p>${movie.Runtime} | ${movie.Year} | ${movie.Genre}</p>
          <p> Director: ${movie.Director}</p>
          <p> ${movie.Actors}</p>
        </div>
      </div>
    </div>
  `
  );
}

// Create ourChoice HTML and append to ourChoice div
function appendOurChoiceMovie(movie) {
  ourChoice.insertAdjacentHTML(
    'beforeend',
    `
    <img class="w-50 poster me-md-5 mb-5" src="${
      movie.Poster
    }" alt="movie poster" id="${movie.imdbID}" />
    <div class="ourChoiceInfo d-flex flex-column justify-content-md-center align-items-center align-items-md-start">
      <h2 class='text-warning'>${movie.Title.toUpperCase()}</h2>
      <p class='text-secondary'>${movie.Plot}</p>
      <p>${movie.Runtime} | ${movie.Year} | ${movie.Genre}</p>
      <p class='text-secondary'>${movie.Awards}</p>
      <p> Director: ${movie.Director}</p>
      <p> ${movie.Actors}</p>
    </div>
  `
  );
}

// show a message when service (API) is not available or some error returns
function serviceNotAvailable() {
  ourChoice.insertAdjacentHTML(
    'beforeend',
    `
    <div class="d-flex w-100 h-100 mt-5 justify-content-center aligned-items-center">
      <p class='text-warning'>Ops, it looks our movies runway from the service today. Try again (refresh page)!</p>
    </div>
  `
  );
}
