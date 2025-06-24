// const { use } = require("react")

// let a = 200 // that is global scope..
// if(true){
// let a = 10
// const b = 20
// var c = 30
// // console.log("inner:",a);// that is a block scope ..
// }

//  console.log(a);
// console.log(b);
// console.log(c);



// function one() {
//     const username = "Sandip";
//     function two() {
//         const website = "youtube";
//         console.log(username); // Accessible here
//     }
//     // console.log(website); // ❌ Error: website is not defined in this scope
//     two(); // ✅ call inner function
// }
// // one(); // Uncomment this to execute

// if (true) {
//     const username = "hitesh";
//     if (username === "hitesh") {
//         const website = "youtube";
//         console.log(username + website); // ✅ OK here
//     }
//     // console.log(website); // ❌ Error: website is block scoped
// }
// console.log(username); // ❌ Error: username is block scoped




function addone (num){
    return num +1
}// we can say this code hosting......

addTwo(5)
const addTwo = function(num){
    return num + 2
}