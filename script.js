// 1. Reverse a String
// You can reverse a string in one line using split, join, and reverse methods.

const reverseString = str =>
  str
    .split('')
    .reverse()
    .join('');

// console.log(reverseString("Welcome to JavaScript"));
// Expected: tpircSavaJ ot emocleW
