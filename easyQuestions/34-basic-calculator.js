// Basic Calculator
// Create a function that takes two numbers and a mathematical operator + - / * and will perform a calculation with the given numbers.

// Examples
// calculator(2, "+", 2) ➞ 4

// calculator(2, "*", 2) ➞ 4

// calculator(4, "/", 2) ➞ 2
// Notes
// If the input tries to divide by 0, return: "Can't divide by 0!"

const calculator = (num1, operator, num2) => {
    if (operator === "+") {
        return num1 + num2
    } else if (operator === "-") {
        return num1 - num2
    } else if (operator === "*") {
        return num1 * num2 
    } else if (operator === "/") {
        return num1 / num2
    }
}

// Improved Solution
const calculatorUsingSwith = (num1, operator, num2) => {
 if (operator === "/" && num2 === 0) return "Can't divide by 0!"
 switch(operator) {
    case "+": return num1 + num2
    case "-": return num1 - num2
    case "*": return num1 * num2
    case "/": return num1 / num2
    default: return "Invalid Oprator"
 }
};
console.log(calculator(2, "+", 2))
console.log(calculator(2, "*", 2))
console.log(calculator(4, "/", 2))
console.log(calculator(15, "-", 2))
console.log(calculatorUsingSwith(2, "+", 2))
console.log(calculatorUsingSwith(2, "*", 2))
console.log(calculatorUsingSwith(4, "/", 2))
console.log(calculatorUsingSwith(15, "-", 2))