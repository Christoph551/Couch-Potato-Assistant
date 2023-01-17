// const StreamKey = 'f46c29e56amsh9e809a40b041c81p199e23jsne729af91c033'; // Rapid API


//variables to tie the html
const $searchBtn = $('#searchBtn'); // On index.html page
const $userInput = $('#userInput');
const prompt = document.getElementById('modal');
const promptTxt = document.getElementById('promptTxt');
const exitPrompt = document.getElementById('close');
let lastSearched = []; 


//makes it not case sensitive 
function compare(a, b) {
return a.movieName.toUpperCase().localeCompare(b.movieName.toUpperCase());
}

// store movies/shows
function storeMovies(movieName,movieData) {
    localStorage.setItem(movieName, JSON.stringify(movieData));
}


$searchBtn.click(function () {
    const omdbKey = '8b30258'
    const movieName = $userInput.val();

    if (movieName.length === 0) {
        
        // display an error message to the user
        prompt.style.display = 'block';
        promptTxt.textContent = "Oops! Please enter the name of a show or movie.";
        exitPrompt.addEventListener('click', function() {
        prompt.style.display = 'none';
    })
            return;    
    } else {
        $.ajax({
            url: `https://www.omdbapi.com/?apikey=${omdbKey}&t=${movieName}`,
            success: function(data) {
                lastSearched = JSON.parse(localStorage.getItem("lastSearched")) || [];
                lastSearched.unshift(movieName); // add the movie to the front of the array
                if (lastSearched.length > 3) {
                    lastSearched.pop(); // remove the last movie if there are more than 3 in the array
                }
                localStorage.setItem("lastSearched", JSON.stringify(lastSearched));
                updateLastSearched();
                storeMovies(movieName,data);
                window.location.href = "summary.html?name=" + movieName;
            }
        });
    }
});

function updateLastSearched() {
    lastSearched = JSON.parse(localStorage.getItem("lastSearched")) || [];
    $('#lastSearched').empty(); // remove any existing buttons
    for (let i = 0; i < lastSearched.length; i++) {
        let movie = lastSearched[i];
        let Moviebutton = $(`<button>${movie}</button>`);
        Moviebutton.click(function() {
            // add a click event to the button to search for the movie
            searchMovie(movie);
        });
        $('#lastSearched').append(Moviebutton);
    }
}