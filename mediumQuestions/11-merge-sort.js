const MergeSort = (arr) => {
  if (arr.length < 2){
    return arr
  }
  const mid = Math.floor(arr.length / 2)
  const leftArr = arr.slice(0, mid)
  const rightArr = arr.slice(mid) 
  return merge(MergeSort(leftArr), MergeSort(rightArr))
};
const merge = (leftArr, rightArr) => {
  const sortedArr = []
  while(leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]){
          sortedArr.push(leftArr.shift())
    } else {
      sortedArr.push(rightArr.shift())
    }
  }
  return [...sortedArr ,...leftArr, ...rightArr]
}

const arrToSort = [-6, 20, 8, -2, 4];
const isSorted = MergeSort(arrToSort);
console.log(isSorted);