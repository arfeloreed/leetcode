// 84. largest rectangle in histogram

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  /**
   * TODOS:
   * 1. create a stack that will a pair of start index for width and height
   * 2. create a max area var
   * 3. loop thourh heights array
   * 4. initialize a start var to current index
   * 5. add pair of start index and height to stack
   * 6. create a base case:
   * while stack is not empty and the current height is less than the height at
   * top of the stack, pop the top of the stack, and assign to respective variables
   * 7. calculate max area of the rectangle of the pop height and set max area var
   * 8. set start var to index of the pop height
   * 9.after the for loop, check if the stack is not empty, if it is not, calculate
   * the max area of the remaining heights by looping through the stack
   * 10. return max area
   */
  const stack = [];
  let maxArea = 0;
  const len = heights.length;

  for (let i = 0; i < len; i++) {
    const height = heights[i];
    let start = i;
    while (stack.length && stack[stack.length - 1][0] > height) {
      const [height, startIdx] = stack.pop();
      const width = i - startIdx;
      maxArea = Math.max(maxArea, width * height);
      start = startIdx;
    }
    stack.push([height, start]);
  }

  const stackLen = stack.length;
  for (let i = 0; i < stackLen; i++) {
    const height = stack[i][0];
    const width = len - stack[i][1];
    maxArea = Math.max(maxArea, width * height);
  }

  return maxArea;
};

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3])); // 10
console.log(largestRectangleArea([2, 4])); // 4
console.log(largestRectangleArea([0])); // 0
console.log(largestRectangleArea([0, 9])); // 9
console.log(largestRectangleArea([4])); // 4
