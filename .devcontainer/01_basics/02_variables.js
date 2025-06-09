const accountId = 122253
let accountEmail = "sandipk5544488@gmail.com"
var accountPassword  =  "12345"
accountCity = " Bihar"

// accountId  = 2 not allowed
accountEmail = "sc@hc.com"
accountPassword  = "122221"
accountCity = "Benguluru"
accountState = "Haryana"

console.log(accountId);

/*
prefer not to use var 
becouse of issue in block scope and functional scope...
*/

// we are use const for not re assign the value  / and it is a keyword , unique ,constant




console.table([accountId , accountEmail , accountPassword , accountCity,accountState])



// Datatype 
// treat all js code  as newr version  
// we are using node js , not use browser  ...
