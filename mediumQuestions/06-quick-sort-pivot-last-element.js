// Problem Give an array of integers, sort the array
// input[array] = [-6, 20, 8, -2, 4] output[array] = [-6, -2, 4, 8, 20]

// Quick sort idea
// identify the pivot elemnt in the array
//     pick the the first element as pivot
//     pick last element as pivot (our approch)
//     pick random element as pivot
//     pick median as pivot
function QuickSort(arr) {
  const pivot = arr[arr.length - 1];
  let leftarr = [];
  let rightarr = [];
  let sumOfArray = []
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      leftarr.push(arr[i]);
    } else {
      rightarr.push(arr[i]);
    }
  }
  for (let l = 0; l < leftarr.length - 1; l++) {
    if (leftarr[l] > leftarr[l + 1]) {
      let leftPrev = leftarr[l];
      leftarr[l] = leftarr[l + 1];
      leftarr[l + 1] = leftPrev;
    }
  }
  for (let r = 0; r < rightarr.length - 1; r++) {
    if (rightarr[r] > rightarr[r + 1]) {
      let rightPrev = rightarr[r];
      rightarr[r] = rightarr[r + 1];
      rightarr[r + 1] = rightPrev;
    }
  }
  sumOfArray = leftarr.concat(pivot).concat(rightarr)
//   console.log(sumOfArray)
  return sumOfArray;
}
const insert = [-6, 20, 8, -2, 4];
const test = QuickSort(insert);
console.log(test);

