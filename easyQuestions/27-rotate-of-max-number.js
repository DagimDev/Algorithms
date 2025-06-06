// Rotate for Max Number
// Create a function which takes a number and returns the maximum value by rearranging its digits.

// Examples
// rotateMaxNumber(123) ➞ 321

// rotateMaxNumber("001") ➞ 100

// rotateMaxNumber(999) ➞ 999
// Notes
// The input number can be a digit or a string.

const rotateMaxNumber = (rot) => {
  let digits = rot.toString().split("").map(Number);
  let check = true;
  while (check) {
    check = false;
    for (let i = 0; i < digits.length - 1; i++) {
      if (digits[i] < digits[i + 1]) {
        check = true;
        let temp = digits[i];
        digits[i] = digits[i + 1];
        digits[i + 1] = temp;
      }
    }
  }
  const isString = digits.join("")
  return Number(isString);
};
console.log(rotateMaxNumber(123));
console.log(rotateMaxNumber("001"));
console.log(rotateMaxNumber(999))