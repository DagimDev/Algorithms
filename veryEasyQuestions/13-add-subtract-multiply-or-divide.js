// Add, Subtract, Multiply or Divide?

// Write a function that takes two numbers and returns if they should be added, subtracted, multiplied or divided to get 24. If none of the operations can give 24, return null.

// Examples
// operation(15, 9) ➞ "added"

// operation(26, 2) ➞ "subtracted"

// operation(11, 11) ➞ null
// Notes
// Only integers are used as test input.
// Numbers should be added, subtracted, divided or multiplied in the order they appear in the parameters.
// The function should return either "added", "subtracted", "divided", "multiplied" or null.

const operation = (x, y) => {
    const twentyFour = 24
    if (x + y === twentyFour) {
        return "added"
    } else if (x - y === twentyFour) {
        return "subtracted"
    } else if (x * y === twentyFour) {
        return "multiplied"
    } else if (x / y === twentyFour) {
        return "divided"
    } else {
        return null
    }
}

console.log(operation(15, 9))
console.log(operation(26, 2))
console.log(operation(11, 11))