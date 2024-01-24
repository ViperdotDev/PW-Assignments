function factorial(n) {
  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
}

const input1 = 5;
const input2 = 0;
const input3 = 10;

console.log(`Factorial of ${input1}: ${factorial(input1)}`);
console.log(`Factorial of ${input2}: ${factorial(input2)}`);
console.log(`Factorial of ${input3}: ${factorial(input3)}`);
