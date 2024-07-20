/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  const len = heights.length;
  if (len === 1) return heights[0] * len;
  let max = 0;
  const stack = [];
  for (let i = 0; i < len; i++) {
    const currHeight = heights[i];
    let idx = i;
    while (stack.length && currHeight < stack.at(-1).height) {
      const { height, strtIdx } = stack.pop();
      max = Math.max(max, height * (i - strtIdx));
      idx = strtIdx;
    }
    stack.push({ height: currHeight, strtIdx: idx });
  }
  for (const i of stack) {
    const { height, strtIdx } = i;
    max = Math.max(max, height * (len - strtIdx));
  }
  return max;
};
console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));
