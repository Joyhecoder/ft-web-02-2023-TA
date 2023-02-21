


const movieUL = document.getElementById('movieUL')



//   for(let i =0; i < movies.length; i++){
//     //create an li elements
//     const li = document.createElement('li')


//  //1. create the element
//  //2. assign the innerHTML
//  //3. append it to the parent div
//     const img = document.createElement('img')
//     img.setAttribute('src', movies[i].Images[0])
//     img.setAttribute('width', "125px")

//     const divTitle = document.createElement('div')
//     divTitle.innerHTML = `Title: ${movies[i].Title}`

//     const iYear = document.createElement('i')
//     iYear.innerHTML = `Year: ${movies[i].Year}`

  

//     //append it to the movieUL
//     movieUL.appendChild(li)
//     movieUL.appendChild(img)
//     movieUL.appendChild(divTitle)
//     movieUL.appendChild(iYear)
//   }

//using template literal

// for(let i=0; i < movies.length; i++){
//   let movie = movies[i]
//   const movieItem = `
//   <li>
//     <img src="${movie.Images[0]}" width="200px">
//     <h1>${movie.Title}</h1>
//     <i>${movie.Year}</i>
//   </li>`

//   //! method 1: concatenating
//   // movieUL.innerHTML += movieItem

//   //!method 2: inserAdjacentHTML
//   //insertAdjacentHTML will not concatenate the strings
//   //this allows for better performance for larger apps
//   movieUL.insertAdjacentHTML('beforeend', movieItem)
// }

//!method 3: map function

const movieItems = movies.map(movie =>{
  return `
  <li>
    <img class= 'poster' src=${movie.Images[0]} width="300px"  >
    <h1>${movie.Title}</h1>
    <i>${movie.Year}</i>
    </li>`
})

movieUL.innerHTML = movieItems.join("")