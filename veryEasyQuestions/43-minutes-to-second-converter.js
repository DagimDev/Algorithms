// Write a function that takes an intiger minutes and convert it to seconds

// Example
//     - minuteToSecondConverter(5) = 300
//     - minuteToSecondConverter(3) = 180
//     - minuteToSecondConverter(2) = 120

// Pseudo code
//     - declatre a function called minuteToSecondConverter
//     - the function takes one argument
//     - check if the given argument is an intiger
//     - inside the function multiply the given argument by 60 and save it on the variable called second
//     - return second

const minuteToSecondConverter = (minutes) => {
    if (minutes <= 0) {
        return "The minutes has to be greater than zero"
    }
    if (typeof minutes !== "number") {
        return "Please enter only ineger number"
    }
    const second = minutes * 60
    return second
}

console.log(minuteToSecondConverter(5))
console.log(minuteToSecondConverter(3))
console.log(minuteToSecondConverter(2))
console.log(minuteToSecondConverter(-2))
console.log(minuteToSecondConverter("num"))