const binarySearch = (arry, tar) => {
  let leftIndex = 0;
  let rightIndex = arry.length - 1;
  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (arry[middleIndex] === tar) {
      return middleIndex;
    }
    if (tar < arry[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
};
console.log(binarySearch([1, 2, 3, 4, 5], 5));
