// Square Every Digit
// Create a function that squares every digit of a number.

// Examples
// squareDigits(9119) ➞ 811181

// squareDigits(2483) ➞ 416649

// squareDigits(3212) ➞ 9414
// Notes
// The function receives an integer and must return an integer.
const squareDigits = (digits) => {
    const isString = digits.toString()
    const arr = []
    const finalResult = []
    for (let i = 0; i < isString.length; i++) {
        arr.push(isString[i])
    }
    const newArray = arr.map(Number)

    for (const pow of newArray) {
        finalResult.push(pow ** 2)
    }
    return parseInt(finalResult.join(""))
}

// Optimized Solution
const squareDigits1 = (num) => {
  return Number(
    num.toString()
       .split('')
       .map(digit => Math.pow(Number(digit), 2))
       .join('')
  );
};
console.log(squareDigits(9119))
console.log(squareDigits(2483))
console.log(squareDigits(3212))
console.log(squareDigits1(9119))
console.log(squareDigits1(2483))
console.log(squareDigits1(3212))