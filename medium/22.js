// 22. generate parentheses

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = [];
  const stack = [];
  /**To dos:
   * 1. create a helper recursive function
   * 2. base case is if open === close === n
   * 3. function will have 2 arguments open and close that will start at 0
   * 4. add open parenthesis to stack if open < n
   * 5. add close parenthesis to stack if close < open
   */
  (function gen(open, close) {
    // base case
    if (open === n && close === open) {
      result.push(stack.join(""));
      return;
    }
    if (open < n) {
      stack.push("(");
      gen(open + 1, close);
      stack.pop();
    }
    if (close < open) {
      stack.push(")");
      gen(open, close + 1);
      stack.pop();
    }
  })(0, 0);

  return result;
};

console.log(generateParenthesis(3)); // ["((()))","(()())","(())()","()(())","()()()"]
// console.log(generateParenthesis(1)); // ["()"]
