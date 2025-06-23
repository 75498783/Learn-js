let a = 200 // that is global scope..
if(true){
let a = 10
const b = 20
var c = 30
console.log("inner:",a);// that is a block scope ..
}

 console.log(a);
// console.log(b);
// console.log(c);