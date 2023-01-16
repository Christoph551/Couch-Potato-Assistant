// Variables moved from script.js file





const movieName = new URLSearchParams(window.location.search).get("name");
const movieData = JSON.parse(localStorage.getItem(movieName));

document.querySelector("#movieTitle").textContent = movieData.Title;
document.querySelector("#moviePlot").textContent = movieData.Plot;
document.querySelector("#moviePoster").src = movieData.Poster;


// const $movieResults = $('#movieResults'); 
// let pastMovies = []; 



const movieData = JSON.parse(localStorage.getItem("Shrek")); 
const actors = movieData.Actors;

console.log(actors)

