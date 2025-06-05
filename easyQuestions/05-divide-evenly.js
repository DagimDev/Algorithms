// Given two integers, a and b, return true if a can be divided evenly by b. Return false otherwise.

// Examples
// dividesEvenly(98, 7) ➞ true
// // 98/7 = 14

// dividesEvenly(85, 4) ➞ false
// // 85/4 = 21.25

const dividesEvenly = (a, b) => {
    if (a % b === 0) {
        return `${true} ${a} / ${b} = ${a / b} is Even`
    }  else {
        return `${false} ${a} / ${b} = ${a / b} is odd`
    }
}

console.log(dividesEvenly(7, 2))
console.log(dividesEvenly(8, 2))