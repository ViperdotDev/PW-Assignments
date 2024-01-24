function calculateTax(income) {
  const rate1 = 0.1;
  const rate2 = 0.15;
  const rate3 = 0.2;
  const rate4 = 0.25;

  let tax = 0;

  if (income <= 10000) {
    tax = income * rate1;
  } else if (income <= 30000) {
    tax = 10000 * rate1 + (income - 10000) * rate2;
  } else if (income <= 70000) {
    tax = 10000 * rate1 + 20000 * rate2 + (income - 30000) * rate3;
  } else {
    tax =
      10000 * rate1 + 20000 * rate2 + 40000 * rate3 + (income - 70000) * rate4;
  }

  return tax;
}

const income1 = 15000;
const income2 = 50000;
const income3 = 80000;

console.log(`Tax for income $${income1}: $${calculateTax(income1)}`);
console.log(`Tax for income $${income2}: $${calculateTax(income2)}`);
console.log(`Tax for income $${income3}: $${calculateTax(income3)}`);
