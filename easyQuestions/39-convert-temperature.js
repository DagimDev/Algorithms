// Create a function that takes a number and a unit ('C', 'F') and convert into other unit.
// Example
// converTemperature(25, C) => "77F"
// converTemperature(86, "F") => "30C"

const convertToFahrenheit = (celsius) => {
  return (celsius * 9) / 5 + 32;
};
const convertToCelsius = (fahrenheit) => {
  return ((fahrenheit - 32) * 5) / 9;
};
const converTemperature = (deggre, unit) => {
  if (unit === "C") {
    return `${convertToFahrenheit(deggre)}F`;
  } else if (unit === 'F') {
    return `${convertToCelsius(deggre)}C`
  }
  return "invalid unit"
};
console.log(convertToFahrenheit(25));
console.log(convertToCelsius(86));
console.log(converTemperature(25, "C"));
console.log(converTemperature(86, "F"))
