const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];


//* 1. Write a for loop to print each number of the ages array
for(let age of ages){
  // console.log(age)
}

//*2. Using a for loop, print each object of the companies array
for(let company of companies){
  // console.log(company)
}

//*3. Using a forEach method, print each number in the ages

// ages.forEach(age => console.log(age))


//* 4. Using a forEach method, print each object of the companies array

// companies.forEach(company => console.log(company))


//* 5. Map through the ages array and return a new ages array where 5 is added to each element.

let newAge = ages.map(age=>age+5)
// console.log(newAge)
// console.log("original", ages)



//* 6. Map through the companies array and return a new companies array where the end date is 2020 for each company.
let newCompanies = companies.map(company =>{
  let newCompanyObj = {...company}
   newCompanyObj.end = 2020
  return newCompanyObj
})
// console.log(newCompanies)
// console.log("original", companies)


//* 7. Filter all even numbers in the ages array
let allEven = ages.filter(age=>{
  return age % 2 == 0
})
// console.log(allEven)


//* 8. Filter out all ages greater than 35
let ageSmallerThan35 = ages.filter(age =>{
  return age < 35
})
// console.log(ageSmallerThan35)


//* 9. Filter out all companies with a start date that is greater than 1990
let companiesStatedAfter1990 = companies.filter(company => {
  return company.start < 1990
})
// console.log(companiesStatedAfter1990)


//* 10. Is there at least one value in the ages array that is equal to 21?
let agesEual21 = ages.some(age => age=21)
// console.log(agesEual21)


//* 11. Are there values in the ages array that are less than 14?
let lessThan14 = ages.some(age => age <14)
// console.log(lessThan14)

//* 12. Are there companies in the company list that started prior to 1990?
let startedBefore1990 = companies.some(company => {
  return company.start < 1990
})
console.log(startedBefore1990)