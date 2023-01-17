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

$.ajax({
    // url: `https://api.themoviedb.org/movie/${movieData.imdbID}/watch/providers/api_key=1fbb8ee4f6b00e55b99760b9656ba30e?watch_region=US`
    url: `https://api.themoviedb.org/3/movie/${movieData.imdbID}/watch/providers?api_key=1fbb8ee4f6b00e55b99760b9656ba30e`,
    success: function(data) {
        localStorage.setItem("movieStreamingData", JSON.stringify(data.results.US));
        renderstreamingData(data.results.US)
    }
});

function renderstreamingData(data){
    const rentservices = data.rent.map(function(resource){
        return resource.provider_name;
    })
    const buyservices = data.buy.map(function(resource){
        return resource.provider_name;
    })
    // use querySelector to select the element with class "rent"
    const rentElement = document.querySelector('.rent');
    // use querySelector to select the element with class "buy"
    const buyElement = document.querySelector('.buy');
    // update the text content of the element with the provider names
    rentElement.textContent = rentservices.join(' | ');
    buyElement.textContent = buyservices.join(' | ');
}
