
// api endpoint
// https://dog.ceo/api/breeds/image/random

let img = document.querySelector("#photo")

let btn = document.querySelector("#btn")
btn.addEventListener('click', () => { 
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(results => results.json())
    .then(data => {
        img.setAttribute('src', data.message)
    })
    .catch(err=> console.log(err))
 })

