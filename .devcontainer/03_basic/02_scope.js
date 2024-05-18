

if (true) {
let a = 10
const b = 20
var c = 30
//console.log("inner:",a);
}

//console.log(a);
//console.log(b);
//console.log(c);

function one(){
    const username = "Devendra"
     function two (){
        const website = "Github"
        console.log(username);
    }
//console.log(website);
    two()
}

//one()
if (true) {
    const username = "Devendra"
    if (username === "Devendra") {
        const website = "youtube"
       // console.log(username + website);

    }
    // console.log(website);   // not in scope
}
//console.log(username)     // not in scope

function addone (num){
    return num + 1
}
console.log(addone(5))

const addTwo = function(num){
    return   num + 2
}
console.log(addTwo(1))


