console.log(movies.Search)

const moviesDiv = document.querySelector(".movies-container")

const movieTitleInput = document.querySelector(".name")
const movieYearInput = document.querySelector(".year")
const movieURLInput = document.querySelector(".url")

const enterBttn = document.querySelector('button')

const displayMovie = () =>{
    const movieHTML = movies.Search.map(movie =>{
        return `
        <div class="card" style="width: 18rem; margin: 1rem;">
            <img src="${movie.Poster}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${movie.Title}</h5>
                <p class="card-text">Year: ${movie.Year}</p>
                <a href="#" class="btn btn-primary">Delete</a>
            </div>
         </div>
        `
    })
    moviesDiv.innerHTML = movieHTML.join("")
}
displayMovie()


//get value from input
let titleVal
let yearVal
let URLVal
// movieTitleInput.addEventListener('change', function () {
//     titleVal = movieTitleInput.value
//     console.log(titleVal)
// })

let newMovie = {}

enterBttn.addEventListener('click', function() {
    //retrieve the value from input
    titleVal = movieTitleInput.value
    yearVal = movieYearInput.value
    URLVal = movieURLInput.value
    console.log(titleVal, yearVal, URLVal)

    //set the set of movie info into newMovie object before pushing it to the movies
    newMovie.Title = titleVal
    newMovie.Year = yearVal
    newMovie.Poster = URLVal
    console.log(newMovie)

    //push it to the movie array
    movies.Search.unshift(newMovie)
    console.log(movies.Search)
    displayMovie()
})






