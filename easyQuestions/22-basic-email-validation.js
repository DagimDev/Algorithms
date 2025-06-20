// Basic E-Mail Validation
// Create a function that accepts a string, checks if it's a valid email address and returns either true or false, depending on the evaluation.

// The string must contain an @ character.
// The string must contain a . character.
// The @ must have at least one character in front of it.
// e.g. "e@edabit.com" is valid while "@edabit.com" is invalid.
// The . and the @ must be in the appropriate places.
// e.g. "hello.email@com" is invalid while "john.smith@email.com" is valid.
// If the string passes these tests, it's considered a valid email address.

// Examples
// validateEmail("@gmail.com") ➞ false

// validateEmail("hello.gmail@com") ➞ false

// validateEmail("gmail") ➞ false

// validateEmail("hello@gmail") ➞ false

// validateEmail("hello@edabit.com") ➞ true

const validateEmail = (str) => {
    const at = str.includes("@", 1)
    const indexOfAt = str.indexOf("@")
    const dot = str.includes(".", indexOfAt + 2)
    return at && dot
}

const validateEmailD = (str) => {
  const atIndex = str.indexOf("@");
  const dotIndex = str.lastIndexOf(".");

  // Basic checks
  if (
    atIndex < 1 ||                     // @ must not be at start
    dotIndex <= atIndex + 1 ||         // . must be after @ with at least 1 char in between
    dotIndex === str.length - 1        // . must not be at the end
  ) {
    return false;
  }

  return true;
};

console.log(validateEmail("@gmail.com"))
console.log(validateEmail("hello.gmail@com"))
console.log(validateEmail("gmail"))
console.log(validateEmail("hello@gmail"))
console.log(validateEmail("hello@edabit.com"))
console.log(validateEmail("john.smith@email.com"))
console.log(validateEmail("a@.com"))