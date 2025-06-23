// const { useDebugValue } = require("react");

//  function sayMyname(){
// // console.log("s");
// // console.log("a");
// // console.log("n");
// // console.log("d");
// // console.log("i");
// // console.log("p");
// }
//sayMyname()
//  function addTwoNumbers(number1,number2){
// let result  = number1+number2
// return result
// console.log("sandip")

   // console.log(number1+number2);
 //}
 
// addTwoNumbers()// it is gave output is NaN
// addTwoNumbers(2,5)//output is 7
// addTwoNumbers(3,"2")// ouput is 32
// addTwoNumbers(5,"a")// output 5a
// addTwoNumbers(3,null)
// Define the function first
// function addTwoNumbers(a, b) {
//     return a + b;
// }

// const result = addTwoNumbers(3, 4);
// console.log("result:", result);

// Corrected loginUserMessage function
// function loginUserMessage(Username = "User") {
//     if (!Username) {
//         console.log("Please enter a username");
//         return;
//     }
//     return `${Username} just logged in`;
// }
 
//console.log(loginUserMessage("sandip")); // Output: sandip just logged in
//console.log(loginUserMessage());         // Output: User just logged in

// function calculatecartprice(...num1){//  this is a rest opretor.. or spread opretor
//     return num1
// }
// console.log(calculatecartprice(200,33,555,666));

const user = {
  username: "Akash",
  price: 199
}

function handleObject(anyObject) {
  console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

//handleObject(user);
handleObject({
  username:"SAM",
  price : 399
})

// const myArray = [200,400,500]
// function returnSecondvalue(getArray){
//   return getArray[1]
// }
// console.log(returnSecondvalue(myArray));

