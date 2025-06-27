
const capitalizeWords = (arr) => {
    let res = []

  for (let i = 0; i < arr.length; i++){
    res.push(arr[i][0].toUpperCase() + arr[i].slice(1))
  }
    return res
}

const Word = ["cat", "hello", "dog", "numbers", "sori"];
console.log(capitalizeWords(Word))