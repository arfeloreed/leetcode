// valid parentheses

/**
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine 
if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // the length should be even since were talking about pairs
  if (s.length % 2) return false;

  let stack = [];

  for (char of s) {
    // push open char into stack
    if (char === "(" || char === "[" || char === "{") stack.push(char);
    else {
      if (
        // if stack is empty or the char pairs do not match return false
        stack.length === 0 ||
        (char === ")" && stack[stack.length - 1] !== "(") ||
        (char === "]" && stack[stack.length - 1] !== "[") ||
        (char === "}" && stack[stack.length - 1] !== "{")
      )
        return false;
      else stack.pop();
    }
  }

  return stack.length === 0;
};

console.log(isValid("{[]}")); // true
console.log(isValid("()")); // true
console.log(isValid("((")); // false
console.log(isValid("()[]{}")); // true
console.log(isValid("([)]")); // false
