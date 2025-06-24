// Amusement Park Discount Check
// 1c. Imagine an amusement park that has a discount for children (6 years and younger) or seniors (65 years and older).
// Create a variable 'age' and save a person's age inside.
// Create an if-statement that checks if the person qualifies for a discount. If they do, display 'Discount' in the console. Otherwise, display 'No discount' in the console.
// Note: try to use the || operator in your solution.
// Try changing the 'age' variable to display different messages.

const age = 6;

const discountCheck = age <= 6 || age >= 65 ? "Discount" : "No discount";
console.log(discountCheck);

// 1d. Continuing from exercise 1c, let's say the discount is only available if it is not a holiday. Create a variable: const isHoliday = true;

// Update the code so that in order to get a discount, people must meet the age requirement and it is also not a holiday.

// Note: && has a higher priority than || so you may need to use brackets () to control which code gets done first.

const isHoliday = false;
const amusementParkDiscountCheck = (age) => {
  if (!isHoliday) {
    if (age <= 6 || age >= 65) return "Discount";
  }
  return "No discount"
};

console.log(amusementParkDiscountCheck(5));


      // && has a higher priority than || so for
      // this to work correctly, we need to add
      // brackets () around the || check to make
      // sure that it gets done first.
      if ((age <= 6 || age >= 65) && !isHoliday) {
        console.log('Discount');
      } else {
        console.log('No discount');
      }