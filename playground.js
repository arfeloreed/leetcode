/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  const len = heights.length;
  const stack = [];
  let max = 0;

  for (let i = 0; i < len; i++) {
    let start = i;
    const height = heights[i];
    // base case for setting the max area
    while (stack.length && height < stack.at(-1).height) {
      const { height: popHeight, start: popStart } = stack.pop();
      const area = popHeight * (i - popStart);
      max = Math.max(max, area);
      start = popStart;
    }

    stack.push({
      height,
      start,
    });
  }

  const stackLen = stack.length;
  for (let i = 0; i < stackLen; i++) {
    const height = stack[i].height;
    const start = stack[i].start;
    const area = height * (len - start);
    max = Math.max(max, area);
  }

  return max;
};

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3])); // 10
console.log(largestRectangleArea([2])); // 2
