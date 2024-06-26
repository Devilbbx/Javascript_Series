

// Types of Datatypes in Js

// 1) Primitive Datatypes  (7 categories)
//  => Interger  String , Boolean , null , undefined ,symbol , BigInt 

{const score = 100
const scorevalue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;}

{const id = Symbol('123')
const anotherid = Symbol("123")
console.log(id ===anotherId);
const bigNumber = 12345678900000000n
console.log(typeof bigNumber);
console.log(typeof anotherId);}



// 2) Non- Primitive Datatype (Reference type)
//  => Array , Objects , Function


const heros = ["dog","apple","cat"];


let myObj = {
    name :"Devendra",
    age: 20,
}

const myFuncion = function(){
    console.log("Hello World");
}


// Javascript is Dynamically Typed Language because in dynamically typed languages, the type is associated with run-time values, not named variables or fields.



// types of memory in Js 
//================================
//Stack Memory(Primitive)
//Heap Memory (Non-Primitive) 

{let myname ="Devendra" // Example of stack memory //  get the copy of data //
let anothername = myname
anothername ="Sushant"
console.log(myname)
console.log(anothername);}
//Output => Devendra
        //Sushant


//Example of heap memory// Get the main or reference of the data direclty not copy of the data


let userone ={
    email:"devendra12@gmail.com",
    username:"Devendra",
    Address:"Kathamandu"
}
let usertwo = userone
usertwo.email="devendra00@gmail.com",
usertwo.username ="Sushant",
console.log(userone.email)
console.log(usertwo.email)
    // Output => devendra00@gmail.com
                //devendra00@gmail.com
