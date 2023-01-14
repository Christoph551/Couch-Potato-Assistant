const StreamKey = 'f46c29e56amsh9e809a40b041c81p199e23jsne729af91c033'; 
const omdbKey = '8b30258'
//const MoviePost = `http://img.omdbapi.com/?apikey=${apiKey}&t=${movieTitle}`; see line 61

//variables to tie the html
const $searchBtn = $('#searchBtn'); // On index.html page
const $userInput = $('#userInput')


//makes it not case sensitive 
function compare(a, b) {
return a.movieName.toUpperCase().localeCompare(b.movieName.toUpperCase());
}

// store movies/shows
function storeMovies(movieName,movieData) {
    localStorage.setItem(movieName, JSON.stringify(movieData));
}

$searchBtn.click(function() {
    const movieName = $userInput.val();
    $.ajax({
        url: `https://www.omdbapi.com/?apikey=${omdbKey}&t=${movieName}`,
                success: function(data) {
                  // process the returned data
                storeMovies(movieName,data);
                    window.location.href = "summary.html?name=" + movieName;
                    // I believe we'll need to add if/else statements. Clicking the button without typing still takes the user to the summary page.
                }
            });
        });

    



// Functions for the movie, streaming api calls

//function buildURLcity(city) {
    //if (city) {
  //      return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
//   }
//}

// function buildUrlMovie(Movie){
//     if (Movie){
//     return `http://www.omdbapi.com/?apikey=${ombdKey}&t=${Movie}`;   
// }
// }

// function buildUrlMovImg(poster){ ///this one is ???
//     if (poster){
//     return `http://img.omdbapi.com/?apikey=${omdbKey}&t=${Movie}`;
// }
// }

//const options = { //this is the stream fetch command 
	//method: 'GET',
	//headers: {
	//	'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
	//	'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
	//}
//};

//fetch('https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=netflix&type=movie&genre=18&page=1&output_language=en&language=en', options)
//	.then(response => response.json())
//	.then(response => console.log(response))
//	.catch(err => console.error(err));

//function buildUrlStream(stream){
// if (stream){
//     return "http"
//

//

// function buildURLId(id) {
//     return `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${apiKey}`;

// })

// Store current city in past cities // make it into movies
// let city = response.name;
// let id = response.id;
// // Remove duplicate cities
// if (pastCities[0]) {
//     pastCities = $.grep(pastCities, function (storedCity) {
//         return id !== storedCity.id;
//     })
// }
// pastCities.unshift({ city, id });
// storeCities();
// displayCities(pastCities);

// // Display current weather // make it into movie 
// cityEl.text(response.name);
// let formattedDate = moment.unix(response.dt).format('L');
// dateEl.text(formattedDate);
// let weatherIcon = response.weather[0].icon;
// weatherIconEl.attr('src', `http://openweathermap.org/img/wn/${weatherIcon}.png`).attr('alt', response.weather[0].description);
// temperatureEl.html(((response.main.temp - 273.15) * 1.8 + 32).toFixed(1));
// humidityEl.text(response.main.humidity);
// windEl.text((response.wind.speed * 2.237).toFixed(1));

// function displayLastSearchedCity() {
//     if (pastCities[0]) {
//         let queryURL = buildURLId(pastCities[0].id);
//         searchWeather(queryURL);
//     } else {
//         // if no past searched cities, load Detroit weather data
//         let queryURL = buildURLcity("Tucson");
//         searchWeather(queryURL);
//     }
// }



