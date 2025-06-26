// Find Second Largest in Array
// 🧠 Steps:
// •	Track both max and second max in a loop.

const secondLargest = (arr) => {
  let max = -Infinity;
  let second = -Infinity
  for (const num of arr) {
    if (num > max) {
        second = max
        max = num
    } else if (second < num){
        second = num
    }
  }
  return `From the array of [${arr}], Maximum is: ${max}, Second max is: ${second}`
};
console.log(secondLargest([1, 20, 3, 40, 5, 6]));