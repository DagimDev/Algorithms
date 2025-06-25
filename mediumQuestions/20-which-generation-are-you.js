// Which Generation Are You?
// Try finding your ancestors and offspring with code.

// Create a function that takes a number x and a character y ("m" for male, "f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).

// If the number is negative, return the related ancestor.
// If positive, return the related descendant.
// You are generation 0. In the case of 0 (male or female), return "me!".
// Examples
// generation(2, "f") ➞ "granddaughter"

// generation(-3, "m") ➞ "great grandfather"

// generation(1, "f") ➞ "daughter"

// Generation	    Male	                    Female
// -3	        great grandfather	        great grandmother
// -2	        grandfather	                grandmother
// -1	        father	                    mother
// 0	        me!	                        me!
// 1	        son	                        daughter
// 2	        grandson	                granddaughter
// 3	        great grandson	            great granddaughter

const generation = (x, y) => {
  const relations = [
    { g: -3, m: "great grandfather", f: "great grandmother" },
    { g: -2, m: "grandfather", f: "grandmother" },
    { g: -1, m: "father", f: "mother" },
    { g: 0, m: "me!", f: "me!" },
    { g: 1, m: "son", f: "daughter" },
    { g: 2, m: "grandson", f: "granddaughter" },
    { g: 3, m: "great grandson", f: "great granddaughter" },
  ];
  for (let i = 0; i < relations.length; i++) {
    if (relations[i].g === x && y === "m") return relations[i].m;
    if (relations[i].g === x && y === "f") return relations[i].f;
  }
};
console.log(generation(2, "f"));
console.log(generation(-3, "m"));
console.log(generation(1, "f"));
console.log(generation(0, "m"))
