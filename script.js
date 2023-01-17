//variables to tie the html
const $searchBtn = $('#searchBtn'); // On index.html page
const $userInput = $('#userInput');
const prompt = document.getElementById('modal');
const promptTxt = document.getElementById('promptTxt');
const exitPrompt = document.getElementById('close');
const omdbKey = '8b30258';
const movieName = $userInput.val();
let lastSearched = []; 


//makes it not case sensitive 
function compare(a, b) {
return a.movieName.toUpperCase().localeCompare(b.movieName.toUpperCase());
}

// store movies/shows
function storeMovies(movieName,movieData) {
    localStorage.setItem(movieName, JSON.stringify(movieData));
}


$(document).ready(function() {
    //Retrieve last searched movies from localStorage
    let lastSearched = JSON.parse(localStorage.getItem("lastSearched")) || [];
    updateLastSearched();

    //Search button click event
    $searchBtn.click(function () {
        const omdbKey = '8b30258';
        const movieName = $userInput.val();
        var titleId;
        if (movieName.length === 0) {
            // display an error message to the user
            prompt.style.display = 'block';
            promptTxt.textContent = "Oops! Please enter the name of a show or movie.";
            exitPrompt.addEventListener('click', function() {
                prompt.style.display = 'none';
            });
            return;    
        } else {
            $.ajax({
                url: `https://www.omdbapi.com/?apikey=${omdbKey}&t=${movieName}`,
                success: function(data) {
                    //Add the movie to the front of the lastSearched array
                    lastSearched.unshift(movieName);
                    if (lastSearched.length > 3) {
                        //Remove the last movie if there are more than 3 in the array
                        lastSearched.pop(); 
                    }
                    //Store the updated lastSearched array in localStorage
                    localStorage.setItem("lastSearched", JSON.stringify(lastSearched));
                    //Update the last searched buttons on the page
                    updateLastSearched();
                    storeMovies(movieName,data);
                    window.location.href = "summary.html?name=" + movieName;
                    titleId = data.imdbID;
                }
            });
        }
    });

    //Function to update the last searched buttons on the page
    function updateLastSearched() {
        
        lastSearched = JSON.parse(localStorage.getItem("lastSearched")) || [];
        $('#lastSearched').empty(); //Remove any existing buttons
        for (let i = 0; i < lastSearched.length; i++) {
            let movie = lastSearched[i];
            let movieButton = $(`<button>${movie}</button>`);
            //Add a click event to the button to redirect to the corresponding movie summary page
            movieButton.click(function() {
                
                window.location.href = "summary.html?name=" + movie;
            });
            $('#lastSearched').append(movieButton);
        }
    }
    
    


})  

