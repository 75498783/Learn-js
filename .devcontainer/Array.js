//  What is an Array in JavaScript?
// An Array in JavaScript is a special variable that can hold multiple values at once (unlike a regular variable that holds a single value).

// Think of an array as a list:

// js
// Copy code
// let fruits = ["Apple", "Banana", "Mango"];
// Here, fruits is an array that holds 3 values.

// 🧠 Key Features of Arrays
// Feature	Description
// ✅ Indexed	Each value in the array has a numeric index starting from 0.
// ✅ Ordered	The order of items is preserved.
// ✅ Dynamic Size	Arrays can grow or shrink at runtime.
// ✅ Can Hold Different Data Types	Strings, numbers, booleans, objects, functions, etc.

// js
// Copy code
// let mixedArray = [42, "Hello", true, null, { name: "Rudra" }];
// 📚 Creating Arrays
// 1. Using square brackets [] (Most common way)
// js
// Copy code
// let colors = ["Red", "Green", "Blue"];
// 2. Using new Array() constructor
// js
// Copy code
// let numbers = new Array(1, 2, 3, 4);
// 📌 Accessing Array Elements
// Use index numbers (starting from 0):

// js
// Copy code
// let cars = ["BMW", "Audi", "Tesla"];
// console.log(cars[0]); // "BMW"
// console.log(cars[2]); // "Tesla"
// ✏️ Modifying Array Elements
// js
// Copy code
// let fruits = ["Apple", "Banana"];
// fruits[1] = "Orange"; // Changes "Banana" to "Orange"
// 🧮 Common Array Properties & Methods
// Name	Description	Example
// length	Returns the number of elements	arr.length
// push()	Adds element to end	arr.push("item")
// pop()	Removes last element	arr.pop()
// unshift()	Adds element to beginning	arr.unshift("item")
// shift()	Removes first element	arr.shift()
// indexOf()	Finds index of element	arr.indexOf("item")
// includes()	Checks if item exists	arr.includes("item")
// slice()	Extracts a section	arr.slice(1, 3)
// splice()	Adds/removes elements	arr.splice(2, 1, "newItem")
// forEach()	Iterates over array	arr.forEach((item) => console.log(item))

// 🔁 Looping Through Arrays
// js
// Copy code
// let nums = [1, 2, 3, 4];

// for (let i = 0; i < nums.length; i++) {
//   console.log(nums[i]);
// }
// Or use:

// js
// Copy code
// nums.forEach((n) => console.log(n));
// 💡 Why Use Arrays?
// To store lists of items (names, numbers, objects, etc.)

// Useful for looping and processing collections of data

// Foundation for advanced structures like stacks, queues, etc.

// Would you like practical examples or small programs using arrays (like sorting, searching, etc.)

const myArr = [1,3,4,5,6,7,8]
const myhero = [" Myfather ", " Mybrother " ]

// const myArr2 = new Array(1,3,4,5)
// console.log(myArr[0]);

// Arrey method
// myArr.push(6)// using push method for adding the value in Array..
// myArr.pop()// it using for delete the value in Array
// console.log(myArr);
// myArr.pop()


// myArr.unshift(9)  // unshift is add the value in first index and shift is remove the unshift value...
// myArr.shift() 
// console.log(myArr); 
// console.log(myArr.includes(9)); // includes is gave information if have the element in Array so it give response true or faise

// console.log(myArr.indexOf(9));// indexof use for checking the element which place exist..

  const newArr = myArr.join()
  console.log(myArr);
  console.log(newArr);


  // slice , spice 
  // slice(1, 3) → returns elements at index 1 and 2 → [20, 30] (original array remains unchanged)

// splice(1, 3) → removes 3 elements starting from index 1 → removes [20, 30, 40] (original array changes)

  console.log("A", myArr);

const myn1 = myArr.slice(1, 3);
console.log("After slice (myn1):", myn1);
console.log("B", myArr); // slice does not change the original array

const myn2 = myArr.splice(1, 3);
console.log("C", myArr); // splice modifies the original array
console.log("After splice (myn2):", myn2);

