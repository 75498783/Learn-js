// Dates............

// In JavaScript, the Date object is used to work with dates and times. It provides methods for creating, retrieving, setting, and formatting dates and times.

// ✅ 1. Creating a Date Object
// You can create a date object in different ways:

// js
// Copy code
// let now = new Date();                    // Current date and time
// let date1 = new Date("2024-12-25");      // Specific date (ISO format)
// let date2 = new Date(2024, 11, 25);      // Year, Month (0-11), Day
// let date3 = new Date(2024, 11, 25, 10, 30); // With hours and minutes
// let date4 = new Date(0);                 // Epoch time (Jan 1, 1970)
// ✅ 2. Get Methods (Read values)
// Method	Description
// getFullYear()	Get the 4-digit year
// getMonth()	Get the month (0–11)
// getDate()	Get the day of the month (1–31)
// getDay()	Get the day of the week (0–6, Sun-Sat)
// getHours()	Get the hour (0–23)
// getMinutes()	Get the minutes (0–59)
// getSeconds()	Get the seconds (0–59)
// getMilliseconds()	Get milliseconds (0–999)
// getTime()	Get time in milliseconds since 1970
// getTimezoneOffset()	Get the time zone difference (in minutes)

// js
// Copy code
// let today = new Date();
// console.log(today.getFullYear());   // 2025
// console.log(today.getMonth());      // 5 (June, because month starts from 0)
// console.log(today.getDate());       // 16
// ✅ 3. Set Methods (Modify values)
// Method	Description
// setFullYear(year)	Set the year
// setMonth(month)	Set the month (0–11)
// setDate(day)	Set the day of the month
// setHours(hour)	Set the hour
// setMinutes(min)	Set the minutes
// setSeconds(sec)	Set the seconds
// setMilliseconds(ms)	Set the milliseconds
// setTime(ms)	Set the time since 1970

// js
// Copy code
// let date = new Date();
// date.setFullYear(2030);
// date.setMonth(0); // January
// console.log(date);
// ✅ 4. Other Useful Date Methods
// Method	Description
// toString()	Converts date to string
// toDateString()	Converts to readable date only (no time)
// toTimeString()	Converts to readable time only
// toISOString()	ISO format date string
// toLocaleString()	Localized date and time
// toLocaleDateString()	Localized date only
// toLocaleTimeString()	Localized time only
// valueOf()	Same as getTime()

// js
// Copy code
// let d = new Date();
// console.log(d.toDateString());     // Mon Jun 16 2025
// console.log(d.toLocaleDateString()); // 16/6/2025 (India)
// console.log(d.toISOString());      // 2025-06-16T06:30:00.000Z
// ✅ 5. Date Comparisons & Math
// js
// Copy code
// let d1 = new Date("2025-06-16");
// let d2 = new Date("2025-06-20");

// console.log(d2 > d1); // true

// let diff = d2 - d1; // milliseconds difference
// console.log(diff / (1000 * 60 * 60 * 24)); // Days difference
// ✅ 6. Static Methods
// Method	Description
// Date.now()	Current time in ms since 1970
// Date.parse()	Parse a string into timestamp
// Date.UTC()	Create UTC time from components

// js
// Copy code
// console.log(Date.now());       // e.g., 1718513492287
// console.log(Date.parse("2025-06-16")); // milliseconds
// ✅ Summary Cheat Sheet
// js
// Copy code
// // Create
// let d = new Date();

// // Get
// d.getFullYear(); d.getMonth(); d.getDate();

// // Set
// d.setFullYear(2024); d.setMonth(5);

// // Format
// d.toString(); d.toLocaleDateString();

// // Compare
// d1 > d2; d1.getTime() - d2.getTime();
// If you want code examples for custom date formatting, countdown timer, or date difference calculator, let me know!













// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

//let myCreatedDate = new Date (2023 , 0,23)
// let myCreatedDate = new Date(2023 ,0 ,23,5,3)
// let myCreatedDate = new Date("2023-01-14")
//let myCreatedDate = new Date("01-14-2025")

// console.log(myCreatedDate.toLocaleString());
//let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

//console.log(Math.floor(Date.now()/1000));



// let d1 = new Date("2025-06-16");
// let d2 = new Date("2025-06-20");

// console.log(d2 > d1); // true

// let diff = d2 - d1; // milliseconds difference
// console.log(diff / (1000 * 60 * 60 * 24)); // Days difference


// console.log(Date.now());       // e.g., 1718513492287
// console.log(Date.parse("2025-06-16")); // milliseconds

// function addWeeks(date, weeks) {
//   let d = new Date(date); // Clone the date
//   d.setDate(d.getDate() + weeks * 7);
//   return d;
// }

// // Example
// let after2Weeks = addWeeks(today, 2);
// console.log("After 2 weeks:", after2Weeks.toDateString());



// function getWeekNumber(date) {
//   let d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
//   let dayNum = d.getUTCDay() || 7; // Get day number (1-7)
//   d.setUTCDate(d.getUTCDate() + 4 - dayNum); // Move to Thursday of current week
//   let yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
//   let weekNum = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
//   return weekNum;
// }

// // Example
// let week = getWeekNumber(new Date());
// console.log("Week number:", week);



function addMonths(date, months) {
  let d = new Date(date); // Clone the date
  d.setMonth(d.getMonth() + months);
  return d;
}

// Example
let today = new Date();
let after3Months = addMonths(today, 3);
console.log("After 3 months:", after3Months.toDateString());
