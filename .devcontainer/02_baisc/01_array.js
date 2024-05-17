// array
const myarr = [0,1,2,3,4,5]
//console.log(myarr[0]);

// Arrray methods
//myarr.push(6) // Add new value to array
//myarr.push(7)
//myarr.pop()   // to remove the last value of the array
//myarr.unshift(9) // to add the value in start
//myarr.shift() 
//console.log(myarr.includes(9));
//console.log(myarr.indexOf(3));

//const newarr = myarr.join() // have same data but chnage the datatype array into string
 //console.log(newarr);
 //console.log(typeof newarr);
 //console.log(myarr);

//======================================= slice , splice ==========================================
//console.log("A",myarr);
//const mynewarr1 = myarr.slice(1,3)

//console.log(mynewarr1);

//const mynewarr2 = myarr.splice(1,3)
//console.log(mynewarr2);


const marvel_hero = ["thor","Iron Man","Starlord"];
//console.log(marvel_hero);

const dc_hero =["Superman","Flash"," BatMan"];
//console.log(dc_hero);

//console.log(marvel_hero);
//console.log(marvel_hero[3][1]);

const hero = marvel_hero.concat(dc_hero);
//console.log(hero);                          // concat help to add two array in one array

const all_new_hero = [...marvel_hero,...dc_hero]
//console.log(all_new_hero);

const another_array = [1,2,3,[4,5,6],7,[8,1,[10,9]]];
const combined_array = another_array.flat(Infinity);   // cobime sub array within array and make it one aary
console.log(combined_array);

 console.log(Array.isArray("Devendra"));            // checking the array 
 console.log(Array.from("Devendra"));              // to convert into array
console.log(Array.from{{name: "Devendra"}})

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));






