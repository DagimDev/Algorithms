// Find the maximum value form the given array
const maximum = (arr) => {
  let res = -Infinity
  for (let i = 0; i < arr.length; i++) {
    if (res < arr[i]) {
        res = arr[i]
    }
  }
//   return Math.max(...arr)
  return res
}
console.log(maximum([1, 20, 3, 4, 5]))
