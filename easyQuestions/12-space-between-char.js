// Spaces Between Each Character

// Create a function that takes a string and returns a string with spaces in between all of the characters.

// Examples
// spaceMeOut("space") ➞ "s p a c e"

// spaceMeOut("far out") ➞ "f a r   o u t"

// spaceMeOut("elongated musk") ➞ "e l o n g a t e d   m u s k"
// Notes
// Treat a space as its own character (i.e. leave three spaces between words).

const spaceMeOut = (str) => {
    let space = ""
    for (let i = 0; i < str.length; i++) {
        space += str[i]
        if (i !== str.length - 1) {
            space += " "
        }
        // space += str[i] + " "
    }
    // using splice method
    // return space.slice(0, space.length - 1)

    return space
}
console.log(spaceMeOut("space"))
console.log(spaceMeOut("far out"))
console.log(spaceMeOut("elongated musk"))

// Using Array.join()
const spaceMeOutJoin = (str) => {
    return str.split("").join(" ")
}
 
console.log(spaceMeOutJoin("hello"))
