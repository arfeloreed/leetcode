/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const numsLen = nums.length;
  if (numsLen === 2) return [0, 1];
  const map = {};
  let need;

  for (let i = 0; i < numsLen; i++) {
    need = target - nums[i];
    if (map[need] !== undefined) return [map[need], i];
    map[nums[i]] = i;
  }
};
