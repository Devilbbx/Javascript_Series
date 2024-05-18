function sayMyName (){
console.log("D");
console.log("E");
console.log("V");
console.log("E");
console.log("N");
console.log("D");
console.log("R");
console.log("A");
}

//sayMyName()

function addTwoNumbers(number1 , number2){
    //console.log(number1 + number2);
    let result = number1 + number2
    //return result
    return number1 +number2
}


addTwoNumbers(3,4)
//addTwoNumbers(3,null)


const result = addTwoNumbers(3,5)
//console.log("Result :", result);          // 


function loginUserMessage(username) {
    //if (username === undefined)
         if (!username){
        console.log("Please enter a username");
        return; // Exit the function early
    }
    return `${username} just logged in`;
}

//console.log(loginUserMessage("Devendra")); // Outputs: Devendra just logged in
console.log(loginUserMessage()); // Outputs: Please enter a username

function calculateCartPrice(...num1){
return num1
}

//function calculateCartPrice(val1,val2,...num1){
   // return num1
   // }

console.log(calculateCartPrice(200,400,500,600,700));

function handelObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

handelObject({
    username : "Devendra",
    price : 199
})

const myNewArray = [200,400,500,600]

function returnSecondValue(getArray){
return getArray[1]
}
console.log(returnSecondValue(myNewArray));
