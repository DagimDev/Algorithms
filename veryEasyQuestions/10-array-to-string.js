// Convert an Array to a String
// Create a function that takes an array of numbers or letters and returns a string.

// Examples
// arrayToString([1, 2, 3, 4, 5, 6]) ➞ "123456"

// arrayToString(["a", "b", "c", "d", "e", "f"]) ➞ "abcdef"

// arrayToString([1, 2, 3, "a", "s", "dAAAA"]) ➞ "123asdAAAA"
const arrayToString = (arr) => {
    let result = ""
    for (const str of arr) {
        result += str
    }
    // let i = 0
    // while(arr.length > i) {
    //     result += arr[i]
    //     i++
    // }
    return result
}

const array = [1, 2, 3, 4, 5]
console.log(arrayToString(array))
console.log(arrayToString(["a", "b", "c", "d", "e", "f"]))
console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"]))