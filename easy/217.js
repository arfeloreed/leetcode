/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const map = {};

  for (const i of nums) {
    if (map[i] !== undefined) return true;
    map[i] = true;
  }

  return false;
};
