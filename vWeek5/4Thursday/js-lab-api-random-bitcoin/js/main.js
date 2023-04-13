//api endpoint: https://api.coindesk.com/v1/bpi/currentprice.json
let btn = document.querySelector("button")
let timeDiv = document.querySelector(".time")
let priceDiv = document.querySelector(".price")

btn.addEventListener("click", () => { 
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then(results => results.json())
    .then(data=>{
        console.log(data)
        timeDiv.innerHTML = `
        <div> Updated at ${data.time.updated} </div>
        `
        priceDiv.innerHTML = `
        <h2> USD </h2>
        <div> Code: ${data.bpi.USD.code} </div>
        <div> Symbol: ${data.bpi.USD.symbol} </div>
        <div> Rate: ${data.bpi.USD.rate} </div>
        <div> Description: ${data.bpi.USD.description} </div>
        <div> Rate Float: ${data.bpi.USD.rate_float} </div>
        <br>
        <h2> GBP </h2>
        <div> Code: ${data.bpi.GBP.code} </div>
        <div> Symbol: ${data.bpi.GBP.symbol} </div>
        <div> Rate: ${data.bpi.GBP.rate} </div>
        <div> Description: ${data.bpi.GBP.description} </div>
        <div> Rate Float: ${data.bpi.GBP.rate_float} </div>

        `

    })
 })