/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length < 2) return nums.length;
  const numsSet = new Set(nums);
  let maxLen = 0;
  let count = 0;

  for (const num of numsSet) {
    if (!numsSet.has(num - 1)) {
      count = 1;
      while (numsSet.has(num + count)) {
        count++;
      }

      maxLen = Math.max(maxLen, count);
    }
  }

  return maxLen;
};
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
console.log(longestConsecutive([-8, -4, 9, 9, 4, 6, 1, -4, -1, 6, 8]));
