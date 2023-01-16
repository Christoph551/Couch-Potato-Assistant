// Variables moved from script.js file
const movieName = new URLSearchParams(window.location.search).get("name");
const movieData = JSON.parse(localStorage.getItem(movieName));

document.querySelector("#movieTitle").textContent = movieData.Title;
document.querySelector("#moviePlot").textContent = movieData.Plot;
document.querySelector("#moviePoster").src = movieData.Poster;
document.querySelector("#actors").textContent = movieData.Actors;
document.querySelector('#genre').textContent = movieData.Genre;
document.querySelector('#rated').textContent = movieData.Rated;
document.querySelector('#runtime').textContent = movieData.Runtime;
