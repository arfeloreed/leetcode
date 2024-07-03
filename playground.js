function ordinal(num) {
  const str = ["th", "st", "nd", "rd"];
  const i = num % 100;
  const j = (i - 20) % 10;
  return num + (str[j] || str[i] || str[0]);
}
function rndNums(len) {
  res = [];
  for (let i = 0; i < len; i++) {
    const num = Math.ceil(Math.random() * 100);
    res.push(ordinal(num));
  }
  return res;
}
console.log(rndNums(10));
