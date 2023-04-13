
//api endpoint: https://ron-swanson-quotes.herokuapp.com/v2/quotes

let p = document.querySelector("p")
let btn = document.querySelector("button")

btn.addEventListener('click', () => { 
    fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
    .then(results => results.json())
    .then(data => {
        console.log(data)
        p.textContent = data[0]
    })
    .catch(err => console.log(err))
 })