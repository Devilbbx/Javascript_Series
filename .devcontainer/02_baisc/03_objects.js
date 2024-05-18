//const appuser = new Object()
const appuser = {}
appuser.id = "12345dev"
appuser.name = "Devendra"
appuser.isLoggedIn = false
//console.log(appuser);

const regularUser = {
    email : "devendra100@gmail.com",
    userfullName : {
        username : {
            fullname : "Devendra",
            lastName :"Chapagain",
        }
    }

}
//console.log(regularUser.userfullName.username.fullname);
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4:"d"}
//const obj3 = { obj1 ,obj2 }
const obj3 = Object.assign({},obj1,obj2)
//console.log(obj3);

//console.log(Object.keys(appuser));
//console.log(Object.values(appuser));
//console.log(Object.entries(appuser));
//console.log(appuser.hasOwnProperty('IsLoggedIn'));


const course = {
    coursename : "Basic Javascript",
    price : "999",
    author : "Devendra Chapagain"
}
const {author} = course
console.log(author);



 



