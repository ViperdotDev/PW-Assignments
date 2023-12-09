//Q.Explain the usage of ternary operator with syntax and write a program to check whether the number is even or odd using the ternary operator.

/*
A) The ternary operator, also known as the conditional operator, is a powerful tool in many programming languages that allows for concise conditional expressions.

 Here's a breakdown of its usage and syntax:

 1. Syntax:

The ternary operator uses the following syntax:
    condition ? expression1 : expression2
where:
    condition: This is any expression that evaluates to a truthy or falsy value.
    expression1: This is the expression that will be evaluated if the condition is truthy.
    expression2: This is the expression that will be evaluated if the condition is falsy.

2. Usage:
The ternary operator allows you to write concise conditional statements in a single line. Here are some common uses:

    Simple conditional assignment:
    let result = age >= 18 ? "adult" : "minor";

    Shorthand if-else statements:
    const message = isLoggedIn ? "Welcome back!" : "Please login.";

    Chained ternary operators:
    const discount = age > 65 ? 50 : age > 18 ? 25 : 0;

*/

let number = 21;

const result = number % 2 == 0 ? 'Even' : 'Odd';

console.log(`The given number is ${result}`);
