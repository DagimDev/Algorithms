// Convert a length
// Create a function that takes a number and a unit ('km', "mile")a4d convert the length to another unit ("km", or "miles")

// note 1 miles = 1.6 km (approximatly)
// Example
//     convertLength(50, "miles", "km") => "80 km"
//     convertLength(32, "km", "miles") => "20 km"
//     convertLength(50, "km", "km") => "50 km"

const convertLength = (length, from, to) => {
  if (
    (from === "km" && to === "km") ||
    (from === "miles" && to === "miles") ||
    (from === "ft" && to === "ft")
  )
    return `${length} ${to}`;
  else if (from === "km" && to === "miles") return `${length / 1.6} ${to}`;
  else if (from === "km" && to === "ft") return `${length * 3281} ${to}`;
  else if (from === "miles" && to === "km") return `${length * 1.6} ${to}`;
  else if (from === "miles" && to === "ft") return `${length * 5280} ${to}`;
  else if (from === "ft" && to === "km") return `${length / 3281} ${to}`;
  else if (from === "ft" && to === "miles") return `${length / 5280} ${to}`;

  return "Invalid Unit";
};
 
console.log(convertLength(32, "km", "miles"));
console.log(convertLength(50, "km", "km"));
console.log(convertLength(20, "miles", "miles"));
console.log(convertLength(50, "miles", "km"));
console.log(convertLength(50, "ft", "ft"));
console.log(convertLength(5, "miles", "ft"));
console.log(convertLength(5, "km", "ft"));
console.log(convertLength(5000, "ft", "km"));
console.log(convertLength(5000, "ibs", "km"));