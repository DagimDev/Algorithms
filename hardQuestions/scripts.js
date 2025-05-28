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

// 3. Dynamic Programming Solution
// dpSumToTarget.js
function dpSumToTarget(nums, target) {
  const dp = new Array(target + 1).fill(false);
  dp[0] = true;
  
  for (const num of nums) {
    for (let i = target; i >= num; i--) {
      if (dp[i - num]) {
        dp[i] = true;
        if (i === target) return true;
      }
    }
  }
  
  return dp[target];
}

module.exports = dpSumToTarget;
