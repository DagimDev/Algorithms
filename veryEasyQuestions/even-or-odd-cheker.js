// Problem check if it Even number or Odd number
const EvenOddCheker = (n) => {
  return n % 2 === 0 ? "Even" : "Odd";
};
console.log(EvenOddCheker(0));

// Problem itrate and return the given integer number is Even or Odd
const EvenOdd = (n) => {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(i % 2 === 0 ? "Even" : "Odd");
  }
  return result;
};
console.log(EvenOdd(5));
