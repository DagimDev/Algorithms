// Amusement Park Discount Check
// 1c. Imagine an amusement park that has a discount for children (6 years and younger) or seniors (65 years and older).
// Create a variable 'age' and save a person's age inside.
// Create an if-statement that checks if the person qualifies for a discount. If they do, display 'Discount' in the console. Otherwise, display 'No discount' in the console.
// Note: try to use the || operator in your solution.
// Try changing the 'age' variable to display different messages.

const age = 6;

const discountCheck = age <= 6 || age >= 65  ? "Discount" : "No discount"
console.log(discountCheck)
