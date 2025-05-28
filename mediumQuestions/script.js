console.log("Test");

// Two Sum
// Given an array of integers and a target number, return the indices of the two numbers that add up to
// the target.
// Example: twoSum([2, 7, 11, 15], 9) → [0, 1]

const twoSum = (arr, target) => {
  // let index = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j]
        //  index.push(i, j)
      }
    }
  }
  return [];
}

const array = twoSum([2, 7, 11, 15], 9);
console.log(array)