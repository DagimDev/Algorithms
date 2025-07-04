// Temperature Conversion
// Write a program that takes a temperature input in celsius and converts it to Fahrenheit and Kelvin. Return the converted temperature values in an array.

// The formula to calculate the temperature in Fahrenheit from Celsius is:

// F = C*9/5 +32
// The formula to calculate the temperature in Kelvin from Celsius is:

// K = C + 273.15
// Examples
// tempConversion(0) ➞ [32, 273.15]
// // 0°C is equal to 32°F and 273.15 K.

// tempConversion(100) ➞ [212, 373.15]

// tempConversion(-10) ➞ [14, 263.15]

// tempConversion(300.4) ➞ [572.72, 573.55]
// Notes
// Return calculated temperatures up to two decimal places.
// Return "Invalid" if K is less than 0.
const tempConversion = (c) => {
  const fahrenheit = (c * 9) / 5 + 32;
  const kelvin = c + 273.15;
  if (kelvin < 0) return "Invalid";
  return [parseFloat(fahrenheit.toFixed(2)), parseFloat(kelvin.toFixed(2))];
};
console.log(tempConversion(0));
console.log(tempConversion(100));
console.log(tempConversion(-10));
console.log(tempConversion(300.4));
