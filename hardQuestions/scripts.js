console.log("Hard Questions")

// 1. Initial Implementation (Two-Number Sum)
// twoSum.js
function hasTwoSum(nums, target) {
  const seen = new Set();
  for (const num of nums) {
    const complement = target - num;
    if (seen.has(complement)) {
      return true;
    }
    seen.add(num);
  }
  return false;
}

module.exports = hasTwoSum;