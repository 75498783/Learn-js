// JavaScript provides many built-in String methods to manipulate and work with string values. While the number can vary slightly by JavaScript engine, the most commonly used String methods (over 30) are listed below:

// ✅ Commonly Used String Methods in JavaScript:
// Method	Description
// charAt(index)	Returns the character at the specified index.
// charCodeAt(index)	Returns the Unicode of the character at the index.
// concat(str)	Joins two or more strings.
// includes(str)	Checks if a string contains a given substring.
// endsWith(str)	Checks if a string ends with the given substring.
// startsWith(str)	Checks if a string starts with the given substring.
// indexOf(str)	Returns the first index of the substring.
// lastIndexOf(str)	Returns the last index of the substring.
// match(regex)	Matches a string against a regular expression.
// matchAll(regex)	Returns all matches of a regex in a string.
// padEnd(length, str)	Pads the end of a string with another string.
// padStart(length, str)	Pads the start of a string with another string.
// repeat(count)	Returns a string repeated a number of times.
// replace(old, new)	Replaces a substring or pattern.
// replaceAll(old, new)	Replaces all occurrences of a substring.
// search(regex)	Searches a string using regex.
// slice(start, end)	Extracts a section of a string.
// split(separator)	Splits a string into an array of substrings.
// substring(start, end)	Extracts characters between two indices.
// toLowerCase()	Converts the string to lowercase.
// toUpperCase()	Converts the string to uppercase.
// trim()	Removes whitespace from both sides.
// trimStart() / trimLeft()	Removes whitespace from the start.
// trimEnd() / trimRight()	Removes whitespace from the end.
// valueOf()	Returns the primitive value of a string.
// toString()	Returns the string representation.
// localeCompare()	Compares two strings in the current locale.
// normalize()	Returns the Unicode Normalization Form.

// ℹ️ Bonus:
// You can also use properties like .length to get the number of characters.

// String objects have a prototype chain allowing inheritance from String.prototype.

// ✅ Summary:
// There are 30+ string methods in JavaScript, and all of them are defined under String.prototype.


const name = "sandip";
const repoCount = 50;

// String template
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = "mandip";

// Accessing characters
console.log(gameName[0]); // Output: 'm'

// Checking prototype (shows string methods)
console.log(gameName.__proto__);

// String length
console.log(gameName.length); // Output: 6

// Convert to uppercase
console.log(gameName.toUpperCase()); // Output: 'MANDIP'

// Character at position 2
console.log(gameName.charAt(2)); // Output: 'n'
  
// we know the index position or number by the help of indexOf syntax...
console.log(gameName.indexOf('n'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.substring(-8,3)
console.log(anotherString);

const newStringon = "  sanju   "// we are using trim in js for remove space in String word..........
console.log(newStringon);
console.log(newStringon.trim());

const url = "https://hitesh.com/hitesh%20choudhary" // we are using replace syntax for replace the index in String of anyu place...
console.log(url.replace('%20','_'));
console.log(url.includes('summer'));// we are using includes syntax for knowing the string have in this code or not ...

console.log(gameName.split('_'));