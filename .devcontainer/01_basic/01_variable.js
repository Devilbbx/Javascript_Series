const accountId = 1234;
let accountEmail = "devendra12@gmail.com";
let accountPassword = "1234";
let accountCity = "Kathmandu";
let accountState;


//node /workspaces/Javascript_Series/.devcontainer/01_basic/01_variable.js


// Constants cannot be reassigned
// accountId = 2; // This will cause an error

// Reassigning values to variables
accountEmail = "devendra001@gmail.com";
accountPassword = "0001";
accountCity = "Nijgadh";

// Display values in a table format
console.table([{ accountId, accountEmail, accountPassword, accountCity ,accountState}]);

// the result of accountState will come undefined since the value is not assigned

/*
Prefer not to use var because of issue in block scope
*/






