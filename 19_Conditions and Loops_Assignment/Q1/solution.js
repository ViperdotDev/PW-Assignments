// Q1. What are conditional statements? Explain conditional statements with syntax and examples.

/*
A)  Conditional statements are fundamental building blocks in JavaScript for controlling the flow of execution based on certain conditions. They allow you to execute different code blocks depending on whether a specific condition evaluates to true or false.

1.if statement: This is the most basic conditional statement. It executes a block of code if the specified condition is true.
*/
if (age >= 18) {
  console.log('You are eligible to vote.');
}

/*
2.if-else statement: This extends the if statement by adding an else block that executes if the specified condition is false.
*/
if (age >= 18) {
  console.log('You are eligible to vote.');
} else {
  console.log('You are not eligible to vote.');
}

/*
3.else-if statement: This allows you to specify additional conditions to be checked after the initial if condition. Each else-if block is checked only if the preceding conditions are false.*/
if (age >= 65) {
  console.log('You are eligible for senior discounts.');
} else if (age >= 18) {
  console.log('You are eligible to vote.');
} else {
  console.log('You are not eligible for any discounts or voting.');
}

/*
4.switch statement: This is used for situations where there are multiple possible conditions to check. It compares a value to a set of cases and executes the code associated with the matching case.
*/

switch (day) {
  case 'Monday':
    console.log("It's Monday!");
    break;
  case 'Tuesday':
    console.log("It's Tuesday!");
    break;
  // ... other cases ...
  default:
    console.log("It's another day!");
}
