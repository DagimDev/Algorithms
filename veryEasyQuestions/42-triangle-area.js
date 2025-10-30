// Write a function that takes base and height of trinagle and returt its area

//    - the area of triangle is (base * height) / 2

// Example
// triArea(3, 2) = 3
// triArea(7, 4) = 14

// Pseudo Code
//  - define a funcrion that takes two argument (base, height)
//  - check id the provided argument values are numbers
//  - then multiply the first argument with the second argument and divide by 2
//  - then return the result

const triArea = (base, height) => {
  if (typeof base !== "number" || typeof height !== "number") {
    return "Please provide only numirical values";
  }
  const result = (base * height) / 2;
  return result;
};

console.log(triArea("hello", 4));
console.log(triArea(3, 2));
console.log(triArea(7, 4));
