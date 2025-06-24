// RegEx Exercise 1: Find the Time
// The time has a format: hours:minutes. Both hours and minutes have two digits, like 09:00.

// Make a regexp to find time in the string: Breakfast at 09:00 in the room 123:456. In this task there’s no need to check time correctness yet, so 25:99 can also be a valid result. The regexp should not match 123:456.

const text = "Breakfast at 09:00 in the room 123:456. Meeting at 25:99";
const times = text.match(/\b\d{2}:\d{2}\b/g);
console.log(times); // ["09:00", "25:99"]