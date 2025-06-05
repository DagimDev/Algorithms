// Return a String as an Integer

// Create a function that takes a string and returns it as an integer.

// Examples
// stringInt("6") ➞ 6

// stringInt("1000") ➞ 1000

// stringInt("12") ➞ 12

// Notes
// All numbers will be whole.
// All numbers will be positive.

const stringInt = (str) => {
    const isNumber = Number(str)
    if (isNumber <= 0) {
        return "Please provide only posative numbers"
    }
     console.log(typeof isNumber)
    return isNumber
}

console.log(stringInt("1000"))
console.log(stringInt("6"))
console.log(stringInt("12"))
console.log(stringInt("-2"))