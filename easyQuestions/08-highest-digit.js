// Highest Digit
// Create a function that takes a number as an argument and returns the highest digit in that number.

// Examples
// highestDigit(379) ➞ 9

// highestDigit(2) ➞ 2

// highestDigit(377401) ➞ 7


// my solution
const highestDigit = (num) => {
    let max = -Infinity
    const numbers = num.toString().split("")
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i]
        }
    }
    return parseInt(max)
}

console.log(highestDigit(379))
console.log(highestDigit(2))
console.log(highestDigit(377401))


// Optimized Solution Code
const highestDigit1 = (num) => {
    return Math.max(...num.toString().split('').map(Number));
};

console.log(highestDigit1(379));    // Output: 9
console.log(highestDigit1(2));      // Output: 2
console.log(highestDigit1(377401)); // Output: 7