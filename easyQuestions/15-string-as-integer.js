// Return a String as an Integer

// Create a function that takes a string and returns it as an integer.

// Examples
// stringInt("6") ➞ 6

// stringInt("1000") ➞ 1000

// stringInt("12") ➞ 12

// Notes
// All numbers will be whole.
// All numbers will be positive.

const stringInt = (str) => {
    const num = Number(str);
  
  // Check if conversion failed (NaN) or not a finite number
  if (isNaN(num) || !isFinite(num)) {
    return "Invalid number format";
  }
  
  // Check if negative
  if (num < 0) {
    return "Please provide only positive numbers";
  }
  
  // Check if zero 
  if (num === 0) {
    return "Zero is not allowed";
  }
  
  // Return as number 
  return num;
}

console.log(stringInt("1000"))
console.log(stringInt("6"))
console.log(stringInt("12"))
console.log(stringInt("-2"))

const stringParseInt = (str) => {
  const num = parseInt(str, 10);
  
  if (isNaN(num)) {
    return "Invalid integer format";
  }
  
  if (num <= 0) {
    return "Please provide only positive integers";
  }
  
  return num;
};

console.log(stringParseInt("12"))