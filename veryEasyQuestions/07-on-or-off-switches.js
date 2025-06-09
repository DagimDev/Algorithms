// On/Off Switches

// Create a function that returns how many possible arrangements can come from a certain number of switches (on / off). In other words, for a given number of switches, how many different patterns of on and off can we have?

// Examples
// posCom(1) ➞ 2

// posCom(3) ➞ 8

// posCom(10) ➞ 1024

const posCom = (pos) => {
    // return Math.pow(2, pos)
    return 2 ** pos
}

console.log(posCom(1))