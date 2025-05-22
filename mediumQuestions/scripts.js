console.log("Medium Algortithm Questions")

// Question
// #3. FizzBuzz Problem: Write a function that prints the numbers from 1 to 100. But for
// multiples of three, print "Fizz" instead of the number, and for the multiples of five,
// print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz".

    const Fizzbuzz = (num) => {
    for (let i = 1; i <= num; i++) {
        let value = i;
        if (value % 3 === 0 && value % 5 === 0) {
            console.log(value + ' FizzBuzz');
        } else if (value % 3 === 0) {
            console.log(value + ' Fizz');
        } else if (value % 5 === 0) {
            console.log(value + ' Buzz');
        } else {
            console.log(value);
        }
    }
}
Fizzbuzz(100);