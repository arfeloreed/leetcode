/**
 *Intuition
The goal is to remove duplicates from a sorted integer array nums while keeping track of the 
number of unique elements. The function should return the count of unique elements and 
modify the input array in-place to contain only the unique elements at the beginning in the same order.

Approach
First, we check if the input vector nums is empty. If it is empty, there are no unique elements, so we return 0.

We initialize a variable k to 1. This variable will keep track of the count of unique elements 
in the modified nums array.

We iterate through the input vector nums starting from the second element (index 1) using a for loop.

Inside the loop, we compare the current element nums[i] with the previous unique element 
nums[k - 1]. If they are not equal, it means we have encountered a new unique element. In 
this case, we update the nums[k] position with the current element to keep it in place. 
We then increment k to indicate that we have found one more unique element.

After the loop completes, k contains the count of unique elements, and the first k elements of 
the nums vector contain the unique elements in the same order they appeared in the input.

We return the value of k as the final count of unique elements.

Complexity
Time complexity:
The time complexity of this algorithm is O(n), where n is the number of elements in the 
input vector nums. This is because we iterate through the input vector once, and each 
iteration takes constant time.

Space complexity:
The space complexity of this algorithm is O(1) because it modifies the input array in-place 
without using any additional data structures that depend on the size of the input.
 */

function removeDuplicates(nums) {
  if (nums.length === 0) {
    return 0;
  }

  let k = 1; // Initialize the count of unique elements to 1
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[k - 1]) {
      nums[k] = nums[i]; // Overwrite the next unique element
      k++;
    }
  }

  return k;
}

console.log(removeDuplicates([1, 1, 2])); // k=2, nums=[1,2]
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // k=5, nums=[0,1,2,3,4]
