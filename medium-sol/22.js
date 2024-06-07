// 22. generate parentheses

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = [];
  /**To dos:
   * 1. create a helper recursive function
   * 2. base case is if open === close === n or close === n
   * 3. function will have 3 arguments str, open and close that will start "(", 1, 0 respectively
   * 4. add open parenthesis to str if open < n and +1 to open
   * 5. add close parenthesis to str if close < open and +1 to close
   */
  (function gen(str, open, close) {
    // base case
    if (close === n) {
      result.push(str);
      return;
    }
    if (open < n) {
      gen(str + "(", open + 1, close);
    }
    if (close < open) {
      gen(str + ")", open, close + 1);
    }
  })("(", 1, 0);

  return result;
};

console.log(generateParenthesis(3)); // ["((()))","(()())","(())()","()(())","()()()"]
console.log(generateParenthesis(1)); // ["()"]
