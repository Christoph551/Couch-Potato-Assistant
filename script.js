
// Attempted to resolve issues using vanilla syntax. 
// A team member sorted the issue first, so we'll use that rendition of the code base. 


const movieButton = document.querySelector('#searchBtn')
const movieInput = document.querySelector('#userInput')
const prompt = document.getElementById('modal');
const promptTxt = document.getElementById('promptTxt');
const exitPrompt = document.getElementById('close');

function searchButton (event) {
    event.preventDefault();
    const movieName = movieInput.value.trim();
    if (movieName == '') {
        prompt.style.display = ".modalContent";
        promptTxt.textContent = "Oops! Please be sure to enter the title of a movie or show.";
        exitPrompt.addEventListener('click', function() {
            prompt.style.display= `none`;
        })
        return;
    } 
    // window.location.href = "summary.html?name=" + movieName;
    getMovieData ();
    // getMovieData();
}



function getMovieData () {
    const movieName = movieInput.value.trim();
    const omdbKey = '8b30258'
    const getMovieInfo = `https://www.omdbapi.com/?apikey=${omdbKey}&t=${movieName}`;
    
    fetch(getMovieInfo) 
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            const logArrayElements = (element, index /*, array */) => {
                console.log(`a[${index}] = ${element}`);
            };
            // clearData();
            [2, 5, , 9].forEach(logArrayElements);
            displayMovieData();

        })
    
}


movieButton.addEventListener('click', searchButton);
