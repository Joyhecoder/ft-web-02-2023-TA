const dishContainer = document.getElementById("dish-container")
console.log(dishes);

const showAll = ()=>{
    const dishItems = dishes.map(dish =>{
        return `
        <div class="eachDish-container">
            <img src="${dish.imageURL}" width="275rem" height="275rem" alt="">
            <div class="dishDescription">
                <div>${dish.title}</div>
                <div>${dish.description}</div>
            </div>
            <div class="price">${dish.price}</div>
        </div>
        `
    })
    
    dishContainer.innerHTML = dishItems.join("")
}


const showStarters = () => {
    const dishItems = dishes.filter((dish)=>dish.course == "Starters")
    console.log(dishItems);
    const filteredDishItems = dishItems.map(dish =>{
        return `
        <div class="eachDish-container">
            <img src="${dish.imageURL}" width="275rem" height="275rem" alt="">
            <div class="dishDescription">
                <div>${dish.title}</div>
                <div>${dish.description}</div>
            </div>
            <div class="price">${dish.price}</div>
        </div>
        `
    })

    dishContainer.innerHTML = filteredDishItems.join("")
}

const showEntrees = () => {
    const dishItems = dishes.filter(dish => dish.course == "Entrees")
    const filteredDishItems = dishItems.map(dish => {
        return `
        <div class="eachDish-container">
            <img src="${dish.imageURL}" width="275rem" height="275rem" alt="">
            <div class="dishDescription">
                <div>${dish.title}</div>
                <div>${dish.description}</div>
            </div>
            <div class="price">${dish.price}</div>
        </div>
        `
    })
    dishContainer.innerHTML = filteredDishItems.join("")
}