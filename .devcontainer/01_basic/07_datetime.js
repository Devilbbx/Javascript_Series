//=======================================
//Datw
let myDate =new Date ()
//console.log(myDate.toString());
//console.log(myDate.toDateString());
//console.log(myDate.toLocaleString());
//console.log(typeof myDate);


let myCreatedDate = new Date(2024,0,23)
//let myCreatedDate = new Date(2024,0,23,5,7,9)
//let myCreatedDate = new Date("2024/05/17")
//console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()
//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getDay());
console.log(newDate.getMilliseconds());
console.log(newDate.getMonth());

console.log(`${newDate.getDay()} and the time`)
newDate.toLocaleString('dafault',{
    weekday:"long"
})
