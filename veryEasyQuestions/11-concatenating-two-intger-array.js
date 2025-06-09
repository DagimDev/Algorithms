// Concatenating Two Integer Arrays
// Create a function to concatenate two integer arrays.

// Examples
// concat([1, 3, 5], [2, 6, 8]) ➞ [1, 3, 5, 2, 6, 8]

// concat([7, 8], [10, 9, 1, 1, 2]) ➞ [7, 8, 10, 9, 1, 1, 2]

// concat([4, 5, 1], [3, 3, 3, 3, 3]) ➞ [4, 5, 1, 3, 3, 3, 3, 3]

const concatenteTwoArray = (arr1, arr2) => {
    // using concat method
    // return arr1.concat(arr2)
    
    // using spreed oprators
    return [...arr1, ...arr2]

}
console.log(concatenteTwoArray([1, 3, 5], [2, 6, 8]))
console.log(concatenteTwoArray([7, 8], [10, 9, 1, 1, 2]))
console.log(concatenteTwoArray([4, 5, 1], [3, 3, 3, 3, 3]))