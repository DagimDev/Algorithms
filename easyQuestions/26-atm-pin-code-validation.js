// ATM PIN Code Validation
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits. Your task is to create a function that takes a string and returns true if the PIN is valid and false if it's not.

// Examples
// validatePIN("1234") ➞ true

// validatePIN("12345") ➞ false

// validatePIN("a234") ➞ false

// validatePIN("") ➞ false
// Notes
// Some test cases contain special characters.
// Empty strings must return false.

// const validatePIN = (pin) => {
//     if (isNaN(pin)) return false
//     if (pin.length === 6) return true
//     return pin.length < 4 || pin.length > 4 ? false : true
// }


const validatePIN = (pin) => {
  const len = pin.length;
  if (len !== 4 && len !== 6) return false;
  
  for (let c of pin) {
    if (c < '0' || c > '9') return false;
  }
  
  return true;
};
console.log(validatePIN("1234"))
console.log(validatePIN("12345"))
console.log(validatePIN("a234"))
console.log(validatePIN(""))
console.log(validatePIN("123456"))
