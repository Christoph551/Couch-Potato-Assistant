const StreamKey = 'f46c29e56amsh9e809a40b041c81p199e23jsne729af91c033'; 
const omdbKey = '8b30258'
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
function loadMovies() {
    const storedCities = JSON.parse(localStorage.getItem('pastCities'));
    if (storedCities) {
        pastCities = storedCities;
    }
}

// store movies/shows
function storeMovies() {
    localStorage.setItem('pastMovies', JSON.stringify(pastMovies));
}

// Functions for the movie, streaming api calls

function buildURLcity(city) {
    if (city) {
        return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    }
}

function buildURLId(id) {
    return `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${apiKey}`;

})

            // Store current city in past cities // make it into movies
            let city = response.name;
            let id = response.id;
            // Remove duplicate cities
            if (pastCities[0]) {
                pastCities = $.grep(pastCities, function (storedCity) {
                    return id !== storedCity.id;
                })
            }
            pastCities.unshift({ city, id });
            storeCities();
            displayCities(pastCities);
            
            // Display current weather // make it into movie 
            cityEl.text(response.name);
            let formattedDate = moment.unix(response.dt).format('L');
            dateEl.text(formattedDate);
            let weatherIcon = response.weather[0].icon;
            weatherIconEl.attr('src', `http://openweathermap.org/img/wn/${weatherIcon}.png`).attr('alt', response.weather[0].description);
            temperatureEl.html(((response.main.temp - 273.15) * 1.8 + 32).toFixed(1));
            humidityEl.text(response.main.humidity);
            windEl.text((response.wind.speed * 2.237).toFixed(1));

            function displayLastSearchedCity() {
                if (pastCities[0]) {
                    let queryURL = buildURLId(pastCities[0].id);
                    searchWeather(queryURL);
                } else {
                    // if no past searched cities, load Detroit weather data
                    let queryURL = buildURLcity("Tucson");
                    searchWeather(queryURL);
                }
            }

            $('#search-btn').on('click', function (event) {
                // prevents refresh page
                event.preventDefault();
        
        
                // Clear the input fields
                cityInput.val('');
        
                // Build the query url with the city and searchWeather // make it movie
                if (city) {
                    let queryURL = buildURLcity(city);
                    searchWeather(queryURL);
                }
            }); 