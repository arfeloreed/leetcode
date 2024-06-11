// ordinal numbers

function ordinal(n) {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  const y = (v - 20) % 10;
  // console.log(v);
  // console.log(y);
  return n + (s[y] || s[v] || s[0]);
}
console.log(ordinal(101));

// array of nums to ordinals
function ordinals(arr) {
  const s = ["th", "st", "nd", "rd"];
  const result = [];

  for (const num of arr) {
    const i = num % 100;
    const j = (i - 20) % 10;
    result.push(num + (s[j] || s[i] || s[0]));
  }

  return result;
}
console.log(ordinals([3, 13, 93, 113, 181, 1013, 1042]));
