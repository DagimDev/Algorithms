// problem - Given two finite non-empty set, Find the cartesian product  
const CartesianProduct = (arr1, arr2) => {
  const ACrossB = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      // cross = `when i is ${arr1[i]} j will be ${arr2[j]}`
      ACrossB.push([arr1[i], arr2[j]]);
      // console.log(cross)
    }
  }
  return ACrossB;
};
// Big-O is O(mxn) Time Complexity b/c it depends on the length of the both arrays so 
// if the length of array1 > array2 or array2 > array1 it has to multiplied with the grater length
// but if the array is equal Time complexity will be big-O O(n^2) which is quadratic
// Big-O is O(mxn) Space Cpmplexity
const array1 = [1, 2];
const array2 = [3, 4, 5];
// const isCrossed = CartesianProduct(array1, array2);
console.log(CartesianProduct(array1, array2));
// console.log(JSON.stringify(CartesianProduct(array1, array2))); JSON.stringify() Compact View

// Step-by-Step Execution of Cartesian Product
// Let's break down how this code computes the Cartesian product of array1 = [1, 2] and array2 = [3, 4, 5].

// What is a Cartesian Product?
// It's the set of all possible ordered pairs where:

// First element comes from the first set (array1)

// Second element comes from the second set (array2)

// For these arrays, the expected result is:

// [
//   [1,3], [1,4], [1,5],
//   [2,3], [2,4], [2,5]
// ]
// Code Execution Step-by-Step
// Initial Setup

// const ACrossB = []; // Empty array to store results
// Outer Loop (arr1)
// First Iteration (i=0, arr1[i]=1)

// Inner Loop (arr2):

// j=0: arr2[j]=3 → Push [1, 3] to ACrossB

// j=1: arr2[j]=4 → Push [1, 4] to ACrossB

// j=2: arr2[j]=5 → Push [1, 5] to ACrossB

// After inner loop completes:

// ACrossB = [[1,3], [1,4], [1,5]]
// Second Iteration (i=1, arr1[i]=2)

// Inner Loop (arr2):

// j=0: arr2[j]=3 → Push [2, 3] to ACrossB

// j=1: arr2[j]=4 → Push [2, 4] to ACrossB

// j=2: arr2[j]=5 → Push [2, 5] to ACrossB

// After inner loop completes:

// ACrossB = [[1,3], [1,4], [1,5], [2,3], [2,4], [2,5]]
// Final Result

// return ACrossB; 
// // Returns:
// // [
// //   [1,3], [1,4], [1,5],
// //   [2,3], [2,4], [2,5]
// // ]
// Visualization of Loop Execution
// Outer Loop (i)	  arr1[i]	      Inner Loop (j)	arr2[j]	    Pushed Pair
// 0	                1	                0	            3	        [1,3]
// 0	                1	                1	            4	        [1,4]
// 0	                1	                2	            5	        [1,5]
// 1	                2	                0	            3	        [2,3]
// 1	                2	                1	            4	        [2,4]
// 1	                2	                2	            5	        [2,5]
// Time Complexity Analysis
// O(m×n) where:

// m = length of arr1 (2 in this case)

// n = length of arr2 (3 in this case)

// Each element of arr1 pairs with every element of arr2 exactly once

// Space Complexity
// O(m×n) since we store all possible combinations

// In this case: 2 × 3 = 6 pairs stored

// Key Takeaways
// Nested loops systematically combine every element from the first array with every element from the second array.

// Order matters: [1,3] is different from [3,1] (though this code doesn't generate the reverse pairs).

// Works for any array sizes - even if one array is much larger than the other.