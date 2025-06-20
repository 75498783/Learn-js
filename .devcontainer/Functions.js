 function sayMyname(){
console.log("s");
console.log("a");
console.log("n");
console.log("d");
console.log("i");
console.log("p");
}
//sayMyname()
 function addTwoNumbers(number1,number2){
// let result  = number1+number2
// return result
// console.log("sandip")

   // console.log(number1+number2);
 }
 
// addTwoNumbers()// it is gave output is NaN
// addTwoNumbers(2,5)//output is 7
// addTwoNumbers(3,"2")// ouput is 32
// addTwoNumbers(5,"a")// output 5a
// addTwoNumbers(3,null)
// Define the function first
function addTwoNumbers(a, b) {
    return a + b;
}

const result = addTwoNumbers(3, 4);
console.log("result:", result);

// Corrected loginUserMessage function
function loginUserMessage(Username = "User") {
    if (!Username) {
        console.log("Please enter a username");
        return;
    }
    return `${Username} just logged in`;
}

console.log(loginUserMessage("sandip")); // Output: sandip just logged in
console.log(loginUserMessage());         // Output: User just logged in
