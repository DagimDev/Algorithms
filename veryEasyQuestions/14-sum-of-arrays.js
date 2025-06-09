// Get the Sum of All Array Elements

// Create a function that takes an array and returns the sum of all numbers in the array.

// Examples
// getSumOfItems([2, 7, 4]) ➞ 13

// getSumOfItems([45, 3, 0]) ➞ 48

// getSumOfItems([-2, 84, 23]) ➞ 105

const getSumOfItems = (arr) => {
    let result = 0
    for (let i = 0; i < arr.length; i++) {
        result += arr[i]
    }
    return result
}

console.log(getSumOfItems([2, 7, 4]))
console.log(getSumOfItems([45, 3, 0]))
console.log(getSumOfItems([-2, 84, 23]))