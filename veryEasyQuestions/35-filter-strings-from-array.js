// Filter Strings from Array
// Create a function that takes an array of strings and numbers, and filters out the array so that it returns an array of integers only.

// Examples
// filterArray([1, 2, 3, "a", "b", 4]) ➞ [1, 2, 3, 4]

// filterArray(["A", 0, "Edabit", 1729, "Python", "1729"]) ➞ [0, 1729]

// filterArray(["Nothing", "here"]) ➞ []

const filterArray = (arr) => {
    let notString = []
    for (const element of arr) {
        if (typeof element !== "string" && element % 1 === 0) notString.push(element)
    }
    return notString
}

console.log(filterArray([1, 2, 3, "a", "b", 4]))
console.log(filterArray(["A", 0, "Edabit", 1729, "Python", "1729"]))
console.log(filterArray(["Nothing", "here", NaN]))
console.log(filterArray(["Nothing", "here"]))