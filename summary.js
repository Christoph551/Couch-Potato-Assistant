// Variables moved from script.js file
// const $movieResults = $('#movieResults'); 
// let pastMovies = []; 



const movieData = JSON.parse(localStorage.getItem("Shrek")); 
const actors = movieData.Actors;

console.log(actors)