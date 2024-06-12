// 11. container with most water
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  const len = height.length;
  let max = 0;
  let left = 0;
  let right = len - 1;
  let area = 0;

  while (left < right) {
    const currentLeft = height[left];
    const currentRight = height[right];
    if (currentLeft < currentRight) {
      area = currentLeft * (right - left);
      left++;
    } else {
      area = currentRight * (right - left);
      right--;
    }
    max = Math.max(max, area);
  }

  return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
