// Factorial of a Number
// Write a recursive function to compute the factorial of a number.
// Example: factorial(5) → 120 (5 × 4 × 3 × 2 × 1)

const factorial = (n) => {
    let res = 1
    for (let i = n; i > 1; i--) {
        res *= i
    }
    return res
}

console.log(factorial(5))
console.log(factorial(4))
console.log(factorial(8))
console.log(factorial(10))
