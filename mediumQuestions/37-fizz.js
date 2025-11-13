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

const twoSum = (arr, target) => {
  // let index = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
        //  index.push(i, j)
      }
    }
  }
  return [];
};