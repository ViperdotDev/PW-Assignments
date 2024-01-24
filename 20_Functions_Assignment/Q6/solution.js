function curry(func) {
  const args = [];

  function curried(...newArgs) {
    args.push(...newArgs);
    if (args.length >= func.length) {
      return func(...args);
    }

    return curried;
  }

  return curried;
}

function addTwoNumbers(a, b) {
  return a + b;
}

const curriedAdd = curry(addTwoNumbers);

const result1 = curriedAdd(5);
const result2 = result1(3);

console.log(`Result: ${result2}`);
