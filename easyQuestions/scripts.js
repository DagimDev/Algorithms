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