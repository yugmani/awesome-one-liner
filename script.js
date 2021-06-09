// 1. Reverse a String
// You can reverse a string in one line using split, join, and reverse methods.

const reverseString = str =>
  str
    .split('')
    .reverse()
    .join('');

// console.log(reverseString("Welcome to JavaScript"));
// Expected: tpircSavaJ ot emocleW

// 2. Get the Average of an Array of Number

// const averageArray = arr => {
//   const average = arr.reduce((current, total) => {
//     return total + current;
//   }, 0);
//   return average / arr.length;
// };

// simplified
const averageArray = arr => arr.reduce((a, b) => a + b) / arr.length;

const myArray = [21, 56, 23, 122, 67];

// console.log(averageArray(myArray));
// Expected: 57.8

// 3. Get an Array of Past Seven Days

// One line code
const pastWeek = [...Array(7).keys()].map(
  days => new Date(Date.now() - 86400000 * days)
);

// Alternative: Step by step explanation
const printLastWeek = () => {
  const week = [...Array(7)]; // [undefined, undefined, undefined, undefined, undefined, undefined, undefined]
  const weekKeys = [...Array(7).keys()]; // [0, 1, 2, 3, 4, 5, 6]
  const lastWeek = weekKeys.map(day => new Date(Date.now()));

  // [Tue Jun 08 2021 13:09:15 GMT-0700 (Pacific Daylight Time), Tue Jun 08 2021 13:09:15 GMT-0700 (Pacific Daylight Time), Tue Jun 08 2021 13:09:15 GMT-0700 (Pacific Daylight Time), Tue Jun 08 2021 13:09:15 GMT-0700 (Pacific Daylight Time), Tue Jun 08 2021 13:09:15 GMT-0700 (Pacific Daylight Time), Tue Jun 08 2021 13:09:15 GMT-0700 (Pacific Daylight Time), Tue Jun 08 2021 13:09:15 GMT-0700 (Pacific Daylight Time)]
  const lastWeekReal = weekKeys.map(
    day => new Date(Date.now() - 86400000 * day)
  );
  // 86400000 used here is the number of milliseconds in a day.
  return lastWeekReal;
};

// console.log(printLastWeek());

// console.table(pastWeek);
//Expected:
// (index)  Value
// 0	      Tue Jun 08 2021 12:48:14 GMT-0700 (Pacific Daylight Time)
// 1	      Mon Jun 07 2021 12:48:14 GMT-0700 (Pacific Daylight Time)
// 2	      Sun Jun 06 2021 12:48:14 GMT-0700 (Pacific Daylight Time)
// 3	      Sat Jun 05 2021 12:48:14 GMT-0700 (Pacific Daylight Time)
// 4	      Fri Jun 04 2021 12:48:14 GMT-0700 (Pacific Daylight Time)
// 5	      Thu Jun 03 2021 12:48:14 GMT-0700 (Pacific Daylight Time)
// 6	      Wed Jun 02 2021 12:48:14 GMT-0700 (Pacific Daylight Time)

// 4. Capitalize first letter of a string
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

console.log(capitalize('JavaScript is fun!'));

//Expected: JavaScript is fun!
