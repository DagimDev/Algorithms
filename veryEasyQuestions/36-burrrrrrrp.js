// Burrrrrrrp
// Create a function that returns the string "Burp" with the amount of "r's" determined by the input parameters of the function.

// Examples
// longBurp(3) ➞ "Burrrp"

// longBurp(5) ➞ "Burrrrrp"

// longBurp(9) ➞ "Burrrrrrrrrp"
// Notes
// Expect num to always be >= 1.
// Remember to use a capital "B".

const longBurp = (num) => {
    const bur = "Burp"
    let burbrs = ""
    for (let i = 0; i < bur.length; i++){
        if(bur[i] === "r") {
            burbrs += bur[i].repeat(num)
        } else {
            burbrs += bur[i]
        }
    }
    return burbrs
} 

console.log(longBurp(3))
console.log(longBurp(5))
console.log(longBurp(8))
console.log(longBurp(12))