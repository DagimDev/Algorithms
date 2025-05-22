console.log("Easy Algortithm Questions")

// check if the array of the numbers are eveb or odd
function EvenOdd(p) {
  let posative = p;
  for (u = 0; u < posative.length; u++) {
    if (posative[u] % 2 === 0) {
      console.log("Is Even");
    } else {
      console.log("Is Odd");
    }
  }
  return posative;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const check = EvenOdd(array);
console.log(array);


// Create a function that takes a number as an argument. Add up all the numbers from 1 to the
// number you passed to the function. For example, if the input is 4 then your function should
// return 10 because 1 + 2 + 3 + 4 = 10.
function addUp(num) {
  let int = 0;
  for (i = 0; i <= num; i++) {
    int += i;
  }
  return int;
}

console.log(addUp(4));


const MaxValue = (a) => {
  let max = [0];
  for (i = 0; i < a.length; i++) {
    if (a[i]  > max) {
      max = a[i];
    }
  }
  return max;
};

const yarra = [1000, 22, 33000, 4, 5, 8, 900];
const maximum = MaxValue(yarra);
console.log(maximum);