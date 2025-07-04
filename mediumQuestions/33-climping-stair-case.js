// Cimping staircase

const climpingStaircase = (n) => {
  let noOfWays = [1, 2];
  for (let i = 2; i < n; i++) {
    noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2];
  }
  return noOfWays[n - 1];
};

console.log(climpingStaircase(1));
console.log(climpingStaircase(2));
console.log(climpingStaircase(3));
console.log(climpingStaircase(4));
console.log(climpingStaircase(5));
