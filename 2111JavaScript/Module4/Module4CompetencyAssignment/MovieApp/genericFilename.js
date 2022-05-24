const searchTerm = document.querySelector('form');
const movieTitle = document.querySelector('.movieTitle');
const movieYear = document.querySelector('.movieYear');
const moviePlot = document.querySelector('.plot');
const movieActors = document.querySelector('.actors')
const queryBase = 'http://www.omdbapi.com/?t='
const queryKey = '&apikey=85b7c5f1'

async function movieDetails(searchTerm) {
    const response = await fetch(queryBase + searchTerm + queryKey);
    const result = await response.json();
    console.log(result);
    updateUI(result)
};

const updateUI = (result) => {
    movieTitle.innerHTML = result.Title;
    movieYear.innerHTML = `Year: ${result.Year}`;
    moviePlot.innerHTML = result.Plot;
    movieActors.innerHTML = result.Actors;
}

searchTerm.addEventListener('submit', e => {
    e.preventDefault();
    let query = searchTerm.search.value.trim();
    query = query.replace(/ /g,"+");
    movieDetails(query);
})
