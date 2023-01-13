const StreamKey = 'f46c29e56amsh9e809a40b041c81p199e23jsne729af91c033'; 
const omdbKey = '8b30258'
//const MoviePost = `http://img.omdbapi.com/?apikey=${apiKey}&t=${movieTitle}`; see line 61


//variables to tie the html
const searchInput = $('#searchInput'); // On index.html page
const searchBtn = $('#searchBtn'); // On index.html page
const homeBtn = $('#homeBtn'); // On summary.html page
const movieResults = $('#movieResults'); // On summary.html page
const moviePhoto = $('moviePhoto');
// const windEl = $('#wind');
// const cityListEl = $('.cityList');
// const cityInput = $('#city-input');

// previous searches 
let pastMovies = [];



// $(document).ready(function) {}


// searchBtn.on('click'), function (event) {
//     console.log("i've been clicked")
// }

$("#searchBtn").click(function() {
     var movieName = $("#movieResults").val(); 
     $.ajax({ url: `http://img.omdbapi.com/?apikey=${omdbKey}&t=${movieTitle}`, data: { name: movieName }, 
     success: function(data){ // process the returned data window.location.href = "https://example.com/movie-details?name=" + movieName; } }); });
     }})


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

// function buildURLcity(city) {
//     if (city) {
//         return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
//     }
// }

//function buildUrlMovie(Movie){
// if (movie){
//      return "http://www.omdbapi.com/?apikey=${ombdKey}&t=${Movie}"   
//}
//}

//funtion buildUrlMovImg(Poster){ this one is ???
// if (poster){
//   return "http://img.omdbapi.com/?apikey=${omdbKey}&t=${Movie}";  
//}
//}

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
            //     // Clear the input fields
            //     cityInput.val('');
        
            //     // Build the query url with the city and searchWeather // make it movie
            //     if (city) {
            //         let queryURL = buildURLcity(city);
            //         searchWeather(queryURL);
            //     }
            // }); 