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

// 2. Extended Implementation (All Combinations)
// sumToTarget.js
function sumToTarget(nums, target) {
  function backtrack(start, currentSum) {
    if (currentSum === target) return true;
    if (currentSum > target || start >= nums.length) return false;
    
    return backtrack(start + 1, currentSum + nums[start]) || 
           backtrack(start + 1, currentSum);
  }
  
  return backtrack(0, 0);
}

module.exports = sumToTarget;
