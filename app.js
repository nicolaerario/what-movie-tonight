const posterElement = document.querySelector(".poster");
const titleElement = document.querySelector(".card-title");
const textElement = document.querySelector(".card-text");

const apiKey = "732fa9bb";
const movieData = {};

document.addEventListener("DOMContentLoaded", () => getRandomMovie());

function getRandomMovie() {
  let randomId = sampleIds[Math.floor(Math.random() * sampleIds.length)];

  let api = `http://www.omdbapi.com/?apikey=${apiKey}&i=tt${randomId}&plot=short`;

  fetch(api)
    .then((response) => {
      let data = response.json();
      return data;
    })
    .then((data) => {
      (movieData.poster = data.Poster),
        (movieData.title = data.Title),
        (movieData.text = data.Plot);
    })
    .then(() => displayMovie());
}

function displayMovie() {
  posterElement.innerHTML = `<img src="${movieData.poster}" class="poster card-img-top" alt="movie-poster">`;
  titleElement.innerHTML = movieData.title;
  textElement.innerHTML = movieData.text;
}

document
  .querySelector(".btn")
  .addEventListener("click", () => getRandomMovie());
