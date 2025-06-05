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

const recursiveReverse = (arr) => {
    if (arr.length === 0) return []
    return recursiveReverse(arr.slice(1).concat(arr[0]))
}

console.log(recursiveReverse([1, 2, 3, 4, 5]))

function recursiveReverse(arr, left = 0, right = arr.length - 1) {
    if (left >= right) return arr;
    [arr[left], arr[right]] = [arr[right], arr[left]];
    return recursiveReverse(arr, left + 1, right - 1);
}

console.log(recursiveReverse([1, 2, 3, 4, 5]))
