// Q.Describe the usage of the comma operator in JavaScript and provide an example.

/*
A) The comma operator (",") in JavaScript has two main uses:

1. Evaluation and returning the rightmost operand:
    The comma operator evaluates each of its operands from left to right, but it only returns the value of the rightmost operand. This can be useful when you want to execute multiple expressions but only need the result of the last one.
*/

let result = (1 + 2, 3 + 4);
console.log(result); // 7

/*
2. Combining expressions in a single statement:

The comma operator allows you to write multiple expressions in places where traditionally only a single expression is allowed. This can be convenient for tasks like initializing multiple variables at once or performing multiple operations within a loop.

*/
let x = 1,
  y = 2; // Initializes both x and y in one statement

for (let i = 0, len = arr.length; i < len; i++) {
  // Loop iterates based on both initializations
}
