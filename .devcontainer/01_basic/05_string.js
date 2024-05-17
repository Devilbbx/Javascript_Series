const name = "Devendra"
const repoCount = 50;
//console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // string interpolation with blacktick
const gameName = new String("Devendra-chapagain")
let gameCount = "Hello";
console.log(gameCount.length);
console.log(gameCount.indexOf('o'));
console.log(gameCount.charAt(2));
console.log(gameName.toUpperCase());
console.log(gameName.__proto__);
console.log(gameName[0]); 

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-18,4);
console.log(anotherString);

const newStringOne = "  Devendra  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://devendrachapagain%20shopping"
console.log(url.replace('%20','-'))

console.log(url.includes('Sushant'))

console.log(gameName.split('-'));
