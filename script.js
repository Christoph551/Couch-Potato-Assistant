const apiKey = '2912dc5a22b0732d6666c08f1e222443'; //omdb key
// more api key variables 

//variables to tie the html
const cityEl = $('#city');
const dateEl = $('#date');
const weatherIconEl = $('#weather-icon');
const temperatureEl = $('#temperature');
const humidityEl = $('#humidity');
const windEl = $('#wind');
const cityListEl = $('.cityList');
const cityInput = $('#city-input');

// previous searches 
let pastMovies = [];



$(document).ready(function () {




//makes it not case sensitive 
function compare(a, b) {
return a.Movie.toUpperCase().localeCompare(b.Movie.toUpperCase());
}



// local storage for movie
function loadCities() {
    const storedCities = JSON.parse(localStorage.getItem('pastCities'));
    if (storedCities) {
        pastCities = storedCities;
    }
}

// store movies/shows
function storeCities() {
    localStorage.setItem('pastCities', JSON.stringify(pastCities));
}

// Functions for the movie, streaming api calls

function buildURLcity(city) {
    if (city) {
        return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    }
}

function buildURLId(id) {
    return `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${apiKey}`;
}