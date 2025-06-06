// Convert Hours into Seconds
// Write a function that converts hours into seconds.

// Examples
// howManySeconds(2) ➞ 7200

// howManySeconds(10) ➞ 36000

// howManySeconds(24) ➞ 86400
// Notes
// 60 seconds in a minute, 60 minutes in an hour

const howManySeconds = (hwr) => { 
    if (typeof hwr !== "number") return "Please provide only numbers"
    const second = 3600
    return hwr * second
}

console.log(howManySeconds(2))
console.log(howManySeconds(10))
console.log(howManySeconds(24))
console.log(howManySeconds("2"))