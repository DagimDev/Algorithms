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

// Reverse an array recursively

const recursiveReverse = (arr) => {
    if (arr.length === 0) return []
    return recursiveReverse(arr.slice(1)).concat(arr[0])
}

console.log(recursiveReverse([1, 2, 3, 4, 5]))

function betterRecursiveReverse(arr, left = 0, right = arr.length - 1) {
    if (left >= right) return arr;
    [arr[left], arr[right]] = [arr[right], arr[left]];
    return betterRecursiveReverse(arr, left + 1, right - 1);
}

console.log(betterRecursiveReverse([1, 2, 3, 4, 5]))

// Reverse an array using while loop
const reverseWhile = (arr) => {

    let left = 0
    let right = arr.length - 1

    while(left < right) {
        // let temp = arr[left] 
        // arr[left] = arr[right]
        // arr[right] = temp
    [arr[left], arr[right]] = [arr[right], arr[left]]
        left++
        right--
    }
  return arr
}
console.log(reverseWhile([9, 9, 2, 3, 4]))