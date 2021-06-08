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

console.log(averageArray(myArray));
// Expected: 57.8
