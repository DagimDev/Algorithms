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

