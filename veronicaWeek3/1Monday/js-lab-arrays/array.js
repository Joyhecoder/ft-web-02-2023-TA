let planets = ["Earth","Jupiter","Neptune","Mars","Saturn","Mercury","Uranus","Venus"]

//* 7. Loop through the planet array using a for loop and print the name of each planet.
for(let i=0; i < planets.length; i++){
    // console.log(planets[i])
}


//* 8. Create a while loop that iterates through each of the items in the planet array and changes each element to lowercase.
let i = 0
while(i < planets.length){
    console.log(planets[i].toLowerCase())
    i++
}