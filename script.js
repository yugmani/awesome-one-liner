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

// console.log(capitalize('JavaScript is fun!'));

//Expected: JavaScript is fun!

// 5. Remove Duplicates of an Array;

const uniqueArray = arr => [...new Set(arr)];

const yourArray = [11, 22, 33, 11, 44];
// console.log(uniqueArray(yourArray));
// Expected: [11, 22, 33, 44]

const myFruits = ['apple', 'mango', 'apple', 'cherry'];
// console.log(uniqueArray(myFruits));
// Expected: ["apple", "mango", "cherry"]

// Round Decimals to a Certain Number of Decimal Places

const roundDecimalPlaces = (num, place) => Number(num.toFixed(place));

// console.log(roundDecimalPlaces(2.935, 2));
// console.log(roundDecimalPlaces(12.349345, 4));
// console.log(roundDecimalPlaces(2.5398, 3));
// console.log(roundDecimalPlaces(1.005, 2));
// console.log(roundDecimalPlaces(1.555, 2));
// console.log(roundDecimalPlaces(0.1234, 2));

// 2.94
// 12.3493
// 3
// 2.54
// 1
// 1.55
// 0.12

// 6. Generate a Random ID
const randomID = () => {
  const random = Math.random();
  console.log(random);
  const str = random.toString(36); // base 36;
  console.log(str);
  const result = str.substring(2);
  return result;
};

//Alternative one line code
// const randomID = Math.random().toString(36).substring(2)

// console.log(randomID());
// Expected: 6fplg4lrgxl (you result may be different)

// 7. What is JavaScript Hoisting?

user = 'Yoog Grg'; // value assignment
var user; // variable declaration
var user; // re-declaration of variable

// console.log(user);

// Expected: Yoog Grg

// Explanation:-

// First of all, the variable declaration at line # 2 and line # 3 will be considered as one statement.
// Now, the concept of hoisting will be applied. Meaning that JavaScript will move the variable declaration to the top. After that, the code will be executed.
// Also, remember that the value stored in a variable will not be lost even if we redeclare the variable.


// 8. Will they return same the output or not?

function user1()
{
	return {
		name: "Juan"
	};
}

function user2()
{
	return
	{
		name: "Juan"
	};
}

// console.log(user1()); // {name: "Juan"}
// console.log(user2());   // undefined