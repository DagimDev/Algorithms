// Reverse an ArrayPublished byinLanguages

// Write a function to reverse an array.

// Examples
// reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]

// reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]

// reverse([]) ➞ []

const reverse = (arr) => {
    const isReversed = []
    for (let i = arr.length - 1; i >= 0; i--) {
        isReversed.push(arr[i])
    }
    return isReversed
}

console.log(reverse([1, 2, 3, 4, 5]))