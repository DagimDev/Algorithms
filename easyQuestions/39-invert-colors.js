// Invert Colors

// Create a function that inverts the rgb values of a given tuple.

// Examples
// colorInvert([255, 255, 255])  ➞ [0, 0, 0]
// (255, 255, 255) is the color white.
// The opposite is (0, 0, 0), which is black.

// colorInvert([0, 0, 0]) ➞ [255, 255, 255]

// colorInvert([165, 170, 221]) ➞ [90, 85, 34]
// Notes
// 255 is the max value of a single color channel.

const colorInvert = (rgb) => {
    let isInverted = []
    for (let i = 0; i < rgb.length; i++){
        isInverted.push(255 - rgb[i]) 
    }
    return isInverted
} 

console.log(colorInvert([0, 0, 0]))
console.log(colorInvert([255, 255, 255]))
console.log(colorInvert([165, 170, 221]))

const invert = (rgb) => rgb.map(val => 255 - val)
console.log(invert([0, 0, 0]))
console.log(invert([255, 255, 255]))
console.log(invert([165, 170, 221]))