/**
 * 1. O(b)
 * 2. O(b)
 * 3. O(1)
 * 4. O(a/b)
 * 5. O(log n)
 * 6. O(/n) : squareroot of n
 * 7. O(n)
 * 8. O(n)
 * 9. O()
 * 10. O()
 */

function sqrt(n) {
  for (let i = 1; i * i <= n; i++) {
    if (i * i === n) return i;
  }
  return -1;
}
console.log(sqrt(1000));
