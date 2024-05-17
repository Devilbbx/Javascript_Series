//  singleton

// object literals
const jsuser = {
    name : "Devendra",
    age: 18,
    location : "devendrachapagain12@gmail.com",
    isloggedIn : false,
    lastLoginDays : ["Monday","Sataurday"]
}

//console.log(jsuser.name);
jsuser.name = "Sushant"
//console.log(jsuser.name);

jsuser.greeting = function(){
    console.log("Hello World");
}

jsuser.greetingtwo = function(){
    console.log(`Hello World,${this.name}`);
}
console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());