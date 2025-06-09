// Recreating the abs() Function
// The Math.abs() function returns the absolute value of a number. This means that it returns a number's positive value. You can think of it as the distance away from zero.

// Create a function that recreates this functionality.

// Examples
// absolute(-1.217197940) ➞ 1.21719794

// absolute(-12.1320) ➞ 12.132
 
// absolute(-544.0) ➞ 544

// absolute(4666) ➞ 4666

// absolute(-3.14) ➞ 3.14

// absolute(250) ➞ 250
// Notes
// Tests will only include valid numbers.
// Don't use the Math.abs() function (it will defeat the purpose of the challenge).

const absolute = (abs) => {
    // using abs value
    // return Math.abs(abs)

    if (typeof abs !== "number") return "please provide valid number only"
    if (abs >= 0) return abs
    return abs * -1
}

console.log(absolute(-1.217197940))
console.log(absolute(-12.1320))
console.log(absolute(-544.0))
console.log(absolute(4666))
console.log(absolute(0))
console.log(absolute(-3.14))
console.log(absolute(250))