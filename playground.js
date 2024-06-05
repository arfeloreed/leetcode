function isValid(s) {
  const len = s.length;
  if (len % 2 !== 0) return false;
  const stack = [];

  for (let i = 0; i < len; i++) {
    const char = s[i];
    if (char === "(" || char === "[" || char === "{") stack.push(char);
    else {
      const lastChar = stack[stack.length - 1];
      if (
        (char === ")" && lastChar !== "(") ||
        (char === "]" && lastChar !== "[") ||
        (char === "}" && lastChar !== "{") ||
        stack.length === 0
      )
        return false;

      stack.pop();
    }
  }

  return stack.length === 0;
}

console.log(isValid("{[]}")); // true
console.log(isValid("()")); // true
console.log(isValid("((")); // false
console.log(isValid("()[]{}")); // true
console.log(isValid("([)]")); // false
