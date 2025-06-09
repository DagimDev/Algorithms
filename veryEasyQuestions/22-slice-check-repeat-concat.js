// Front 3 - Slice Check Repeat Concatenate
// Create a function that takes a string; we'll say that the front is the first three characters of the string. If the string length is less than three characters, the front is whatever is there. Return a new string, which is three copies of the front.

// Examples
// frontThree("Python") ➞ "PytPytPyt"

// frontThree("Cucumber") ➞ "CucCucCuc"

// frontThree("bioshock") ➞ "biobiobio"


const frontThree = (str) => {
    // let strLength = str.slice(0, 3).length
    // let natty = str.slice(0, 3)
    // let res = ""
    // if (str.length !== strLength ** 2) {
    //     for (let i = 0; i < strLength; i++) {
    //         res += natty
    //     }
    // } else {
    //     return str
    // }
    // return res

    // Advanced solution
    const front = str.slice(0, 3) 
    return front.repeat(3)
} 

console.log(frontThree("Python"))
console.log(frontThree("Cucumber"))
console.log(frontThree("bioshockl"))