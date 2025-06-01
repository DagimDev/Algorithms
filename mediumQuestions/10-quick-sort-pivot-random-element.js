// Problem Give an array of integers, sort the array
// input[array] = [-6, 20, 8, -2, 4] output[array] = [-6, -2, 4, 8, 20]

// Quick sort idea
// identify the pivot elemnt in the array
// pick random element as pivot
const QuickSortRandom = (arr) => {
    if (arr.length < 2) {
        return arr
    }
  let solved = Math.floor(Math.random() * arr.length);
  let randomPivot = arr[solved]; // to check the value of the array
//   console.log(randomPivot);
  arr.splice(solved, 1); // to see removed array
  //   console.log(arr);
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < randomPivot) {
        left.push(arr[i])
    } else {
        right.push(arr[i])
    }
  }
  return [...QuickSortRandom(left), randomPivot, ...QuickSortRandom(right)]
};

const arrToSort = [8, 20, -2, 4, -6, 69, 99, 100, 44, 56];
const isSorted = QuickSortRandom(arrToSort);
console.log(isSorted);
