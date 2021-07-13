//initializing myAge
const myAge = 30;

//initializing earlyYears
let earlyYears = 2;
earlyYears*= 10.5;

//Calculating later years
let laterYears = myAge - 2;

// Multiply later years by 4
laterYears*= 4;

console.log(earlyYears);
console.log(laterYears);

//Calculating age in dog years
const myAgeInDogYears = earlyYears + laterYears;

//Initializing myName to my name
const myName = 'Linda'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} 
years old in human years which is ${myAgeInDogYears} years old in dog years`);