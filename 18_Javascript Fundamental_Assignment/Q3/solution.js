/*
Q. Use a nested ternary operator to check that a number is positive, negative or zero. You have to print
“positive” if the number is positive and similarly for negative and zero also.
*/

let number = 12;
const result = number >= 0 ? (number == 0 ? 'Zero' : 'Positive') : 'Negative';
console.log(`The given number is '${result}'`);
