// bubble sort algorithm

// pseudocode
// - define a function that takes array as an argument
// - loop on every element
// - compare the elements
// - if the first value is greater switch position
/*- use array[i] to get the first value 
     - use array[i + 1] to get the second value */
// - to switch the position
// - array[i] = array[i + 1]
// - array[i + 1] = array[i]
// example [12, 9, 22, 5]
// when it trayed to sawap 12 and 9
// in the first value 9 will be placed {array[i] = array[i + 1] so this is equal to array[i] = 9} in this
// case the first value is changed
// when it traies to put the array[i] value in the array[i + 1] {array[i + 1] = array[i] it will be 9 again}
// becuse array[i] is already changed so to sove this i need to place array[i] in a temporary palce so...
// if the first value is greater switch the position
// - let temporary = array[i]
// - array[i] = array[i + 1]
// - array[i + 1] = temp
// this case will work for one time loop means it will swap for only one time
// example [12, 9, 22, 5] swap = [9, 12, 5, 22]
// to lopp again to check if there is still elements has to be swap i needd to use while loop
// create a varible and store a boolean true b/c if the var is true it will excute the code inside while loop
// nut if it remains true the while wont stop excution so this will cause a inffinte loop
// to prevent inffinte loop change the variable to false this will make it excute only one time then stop
// this too work the same so to solve again
// change the variable here
// if the first value is greater switch the position
// var checker = true this do if there is any numbers left array[i] > array[i + 1] it will swap them untill
// noting remains array[i] > array[i + 1]
// - let temporary = array[i]
// - array[i] = array[i + 1]
// - array[i + 1] = temp

// Bubble Sort Pseudocode

/*1. Define a function that takes an array as input.

2. Create a boolean variable `isSorted` and set it to true.
   - This will help determine whether any elements were swapped during a loop.

3. While `isSorted` is true:
   a. Set `isSorted` to false at the beginning of each loop iteration.
      - Assume the array is sorted unless a swap proves otherwise.

   b. Loop through the array from the beginning to the second-last element:
      i. Compare the current element with the next one: array[i] and array[i + 1].

      ii. If the current element is greater than the next:
       - Set `isSorted` to true (because a swap occurred).
          - Store the current element in a temporary variable:
              `temp = array[i]`
          - Swap the elements:
              `array[i] = array[i + 1]`
              `array[i + 1] = temp`

5. Return or print the sorted array.*/

const bubbleSort = (arr) => {
  let isSorted = true;
  while (isSorted) {
    isSorted = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        isSorted = true;
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
  return arr;
};

const bubble = [12, 50, 2, 9, 5, 22, 45, 89];
const sorted = bubbleSort(bubble);
console.log(sorted);
