// 155. Min stack

var MinStack = function () {
  // initialize stack properties
  this.stack = [];
  this.minStack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  // add val to minStack when stack is empty or val is less than the top of minStack
  if (this.stack.length === 0 || val <= this.minStack.at(-1)) this.minStack.push(val);
  // push val to stack
  this.stack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (this.stack.length > 0) {
    // pop val from stack
    const val = this.stack.pop();
    // pop val from minStack if val is equal to the top of minStack
    if (val === this.minStack.at(-1)) {
      this.minStack.pop();
    }
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  if (this.stack.length < 1) return null;
  return this.stack.at(-1);
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  if (this.stack.length < 1) return null;
  return this.minStack.at(-1);
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // return -3
minStack.pop();
console.log(minStack.top()); // return 0
console.log(minStack.getMin()); // return -2
