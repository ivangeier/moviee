let searchResult = document.querySelector('.searchResult');
let searchButton = document.querySelector('.searchButton');
let searchInput = document.querySelector('.searchInput');

// Event listener on Search Button
searchButton.addEventListener('click', async (e) => {
  e.preventDefault();
  clearResults();
  findResult(searchInput.value);
  clearInput();
});

// Create movie card HTML and append on searchResult div
function appendMovieResult(movie) {
  searchResult.insertAdjacentHTML(
    'beforeend',
    `
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img class='d-flex w-100 h-100 poster' src="${movie.Poster}" alt="movie poster">
        </div>
        <div class="flip-card-back d-flex flex-column w-10 h-100 align-items-center justify-content-center p-3">
          <h3 class='text-warning'>${movie.Title}</h3>
          <p>${movie.Year}</p>
          <p class='text-secondary'>${movie.Type}</p>
        </div>
      </div>
    </div>
  `
  );
}

// Movie not found - show message
function movieNotFound() {
  searchResult.insertAdjacentHTML(
    'beforeend',
    `
    <div class="d-flex w-100 h-100 justify-content-center aligned-items-center">
      <p class='text-warning'>Ops, it looks that movies hasn't been created yet. Try another one!</p>
    </div>
  `
  );
}

// clear all previous results in HTML.
function clearResults() {
  searchResult.innerHTML = '';
}

// Clear input Find a movie
function clearInput() {
  searchInput.value = '';
}
