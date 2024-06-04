// 238. product of array except self

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const pre = [];
  const len = nums.length;

  for (let i = 0; i < len; i++) {
    if (nums[i - 1] === undefined) {
      pre[i] = nums[i];
    } else {
      pre[i] = pre[i - 1] * nums[i];
    }
  }

  let post = 1;
  for (let i = len - 1; i >= 0; i--) {
    pre[i] = (pre[i - 1] === undefined ? 1 : pre[i - 1]) * post;
    post = nums[i] * post;
  }

  return pre;
};

console.log(productExceptSelf([1, 2, 3, 4])); // [24, 12, 8, 6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // [0,0,9,0,0]
