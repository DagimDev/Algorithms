// footballPoints(3, 4, 0) = 13

// pseudo code
// define a function that takes three arguments (w, d, l)
// check if the arguments are numbers
// multiply the first argument(w) by 3
// multiply the second argument(d) by 1
// multiply the third argument(l) by 0
// then return the sum (3*w + d*1 + l*0)

const footballPoints = (win, draw, loses) => {
  if (
    typeof win === "number" &&
    typeof draw === "number" &&
    typeof loses === "number"
  ) {
    return "not num";
  }
  return win * 3 + draw * 1 + loses * 0;
};

console.log(footballPoints(3, 4, 0));
console.log(footballPoints("3", 4, 0));
