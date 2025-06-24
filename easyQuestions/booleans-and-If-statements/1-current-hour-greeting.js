// 1a. Create a variable called 'hour' and save the current hour of the day (use 24-hour format and save it as a number between 0 and 23).
    // If hour is between 6 and 12, display 'Good morning!' in the console
    // If hour is between 13 and 17, display 'Good afternoon!' in the console
    // Otherwise, display 'Good night!' in the console

    // 1b. Continuing from 1a, create a variable called 'name' and save your name inside (as a string). Update the if-statement to display your name in each message. For example: 'Good morning ${name}!'

const hour = new Date().getHours()
const name = "natty"
console.log(hour)
if(hour >= 6 && hour <= 12) {
    console.log(`Good morning! ${name}`)
} else if (hour >= 13 && hour <= 17){
    console.log(`Good afternoon! ${name}`)
} else {
    console.log(`Good night! ${name}`)
}