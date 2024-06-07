// reverse polist notation

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  // create a stack to track the operation
  const stack = [];

  // loop through the tokens
  for (const token of tokens) {
    if (isNaN(token)) {
      // if token is not a number
      // pop two numbers from stack
      const b = stack.pop();
      const a = stack.pop();
      let eq;
      switch (token) {
        case "+":
          eq = a + b;
          break;
        case "-":
          eq = a - b;
          break;
        case "*":
          eq = a * b;
          break;
        case "/":
          eq = ~~(a / b);
          break;
        default:
          break;
      }
      // push result of operation to stack
      stack.push(eq);
    } else stack.push(parseInt(token)); // if it's a number, convert it then push to stack
  }

  // return the answer
  return stack[0];
};

console.log(evalRPN(["2", "1", "+", "3", "*"])); // 9
console.log(
  evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])
); // 22
