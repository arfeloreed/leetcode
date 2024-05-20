// 128. longest consecutive sequence

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;

  nums.sort((a, b) => a - b);
  let max = 1;
  let currentMax = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      if (nums[i - 1] + 1 === nums[i]) {
        currentMax += 1;
      } else {
        currentMax = 1;
      }
      max = Math.max(currentMax, max);
    }
  }

  return max;
};
