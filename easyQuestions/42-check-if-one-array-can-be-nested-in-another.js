// Check if One Array can be Nested in Another
// Create a function that returns true if the first array can be nested inside the second and false otherwise.

// arr1 can be nested inside arr2 if:

// arr1's min is greater than arr2's min.
// arr1's max is less than arr2's max.
// Examples
// canNest([1, 2, 3, 4], [0, 6]) ➞ true

// canNest([3, 1], [4, 0]) ➞ true

// canNest([9, 9, 8], [8, 9]) ➞ false

// canNest([1, 2, 3, 4], [2, 3]) ➞ false

const canNest = (arr1, arr2) => {
  if (typeof arr1 !== "object" || typeof arr2 !== "object") {
    return "it has to be array";
  }
  let array1Minimum = Infinity;
  let array2Minimum = Infinity;
  let array1Maximum = -Infinity;
  let array2Maximum = -Infinity;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] < array1Minimum) {
      array1Minimum = arr1[i];
    }
    if (arr1[i] > array1Maximum) {
      array1Maximum = arr1[i];
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] < array2Minimum) {
      array2Minimum = arr2[i];
    }
    if (arr2[i] > array2Maximum) {
      array2Maximum = arr2[i];
    }
  }
  if (array1Minimum > array2Minimum && array1Maximum < array2Maximum) {
    return true;
  }
  return false;
};

// console.log(canNest([3, 1], [4, 0]));
// console.log(canNest([20, 30, 10, 5, 6, 8], [4, 5, 7, 3]));
console.log(canNest([1, 2, 3, 4], [0, 6]));
console.log(canNest([3, 1], [4, 0]));
console.log(canNest([9, 9, 8], [8, 9]));
console.log(canNest([1, 2, 3, 4], [2, 3]));
console.log(canNest([1, 2, 3, 4, 74], [2, 3, 9]));

// Alternative approch using sort method
const canNestWithSort = (a1, a2) => {
  let array1Sorted = a1.sort();
  let array2Sorted = a2.sort();
  let array1Min = array1Sorted[0];
  let array1Max = array1Sorted[array1Sorted.length - 1];
  let array2Min = array2Sorted[0];
  let array2Max = array2Sorted[array2Sorted.length - 1];

  return array1Min > array2Min && array1Max < array2Max ? true : false;
};

console.log(canNestWithSort([1, 2, 3, 4], [0, 6]));
console.log(canNestWithSort([3, 1], [4, 0]));
console.log(canNestWithSort([9, 9, 8], [8, 9]));
console.log(canNestWithSort([2, 3, 4], [2, 3]));
console.log(canNestWithSort([1, 2, 3, 4, 74], [2, 3, 9]));
