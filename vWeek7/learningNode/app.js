const superheroes = require('superheroes');

const allHeros = superheroes.all;
console.log(allHeros)

const randomHero = superheroes.random()
console.log("random hero:", randomHero)