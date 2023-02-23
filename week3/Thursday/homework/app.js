console.log(movies.Search)

const moviesDiv = document.querySelector(".movies-container")

const movieTitleInput = document.querySelector(".name")
const movieYearInput = document.querySelector(".year")
const movieURLInput = document.querySelector(".url")

const enterBttn = document.querySelector('#enterBttn')
const deleteBttn = document.querySelector('#deleteBttn')

const displayMovie = () =>{
    const movieHTML = movies.Search.map(movie =>{
        return `
        <div class="card" style="width: 18rem; margin: 1rem;">
            <img src="${movie.Poster}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${movie.Title}</h5>
                <p class="card-text">Year: ${movie.Year}</p>
                <button class="btn btn-primary" id="deleteBttn" onclick="deleteMovie('${movie.Title}')">Delete</button>
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



//enter a new movie 
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
    newMovie = {}
})

//delete a movie

// if(deleteBttn !== null){
//     deleteBttn.addEventListener('click', function() {
//         console.log(deleteBttn.value)
//     })
// }else{
//     console.log("delete is null")
// }

const deleteMovie = (movieTitle) => { 
console.log(movieTitle)
const newMovieArrayAfterDelete = movies.Search.filter((item)=> (item.Title !== movieTitle))
console.log(newMovieArrayAfterDelete)
movies.Search = newMovieArrayAfterDelete
displayMovie()
 }



