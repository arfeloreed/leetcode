// 15. 3sum

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const result = [];
  nums.sort((a, b) => a - b);
  const len = nums.length;

  for (let i = 0; i < len - 2; i++) {
    const a = nums[i];
    if (a === nums[i - 1] && i > 0) continue;

    let b = i + 1;
    let c = len - 1;
    while (b < c) {
      const sum = a + nums[b] + nums[c];
      if (sum > 0) {
        c--;
      } else if (sum < 0) {
        b++;
      } else {
        result.push([a, nums[b], nums[c]]);
        b++;
        c--;
        while (nums[b] === nums[b - 1] && b < c) {
          b++;
        }
      }
    }
  }

  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1,-1,2],[-1,0,1]]
