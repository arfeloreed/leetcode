/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const len = nums.length;
  const res = [];
  let after = 1;

  for (let i = 0; i < len; i++) {
    res.length === 0 ? res.push(nums[i]) : res.push(nums[i] * res[i - 1]);
  }

  for (let i = len - 1; i >= 0; i--) {
    res[i] = after * (res[i - 1] === undefined ? 1 : res[i - 1]);
    after *= nums[i];
  }

  return res;
};
console.log(productExceptSelf([1, 2, 3, 4]));
