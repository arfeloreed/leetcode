// 739. daily temperatures

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  /**
   * TODOS:
   * 1. create a result with the same length as the temperatures with default value 0 in array to return
   * 2. create a stack that will hold an array of temp and index as a pair
   * 3. loop through the temperatures
   * 4. add the temp and index to the stack
   * 5. while the length of the stack is greater than 0
   * 6. check if the current temp is greater than the last temp in the stack
   * 7. then pop the last in the stack
   * 8. subtract the last index in the stack from the current index of the temp and
   *    replace the value in the same index in the result
   */
  const result = Array.from({ length: temperatures.length }, () => 0);
  const stack = [];

  temperatures.forEach((temp, index) => {
    while (stack.length > 0 && temp > stack[stack.length - 1][0]) {
      const [_, lastIndex] = stack.pop();
      result[lastIndex] = index - lastIndex;
    }
    stack.push([temp, index]);
  });

  return result;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); // [1,1,4,2,1,1,0,0]
