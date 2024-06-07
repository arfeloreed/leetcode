// 853. car fleet

/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
  /**
 * TODOS:
 * 1. create a new array called cars
 * 2. loop through the position and speed
 * 3. push them into the cars array as a pair
 * 4. sort the cars array in ascending order by position
 * 5. loop through the cars array starting from last element
 * 6. get the time of the last car needed to reach the target
 * 7. push time to stack if stack is empty
 * 8. if stack length is not empty, if current time is greater than the last time
    in stack, push current time to stack
 * 9. return the length of the stack
 */

  const cars = position.map((pos, i) => [pos, speed[i]]);
  cars.sort((a, b) => a[0] - b[0]);
  const stack = [];

  for (let i = cars.length - 1; i >= 0; i--) {
    const time = (target - cars[i][0]) / cars[i][1];
    if (stack.length === 0 || time > stack.at(-1)) stack.push(time);
  }

  return stack.length;
};

console.log(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3])); // 3
