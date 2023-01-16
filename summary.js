// // Variables moved from script.js file
// // const $movieResults = $('#movieResults'); 
// const $movieResults = document.getElementById('#movieResults');
// let pastMovies = []; 






// const searchData = {
//     title: $userInput.value,
//     actors: $actors.value,
//     genre: $genre.value,
//     plot: $plot.value.trim(),
//     rating: $rating.value,
//     poster: $poster.value,
// }

console.log(title)

renderMovieData ();

function renderMovieData(data) {
    const movieData = JSON.parse(localStorage.getItem("Shrek"));
    for (let i=0; i<movieData.length; i++) {
        document.getElementById('#movieResults').innerHTML +=
        data[i].id + data[i.title + ""];
    }
}