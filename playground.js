function encode(strs) {
  let res = "";
  for (const str of strs) {
    const len = str.length;
    res += `${len}#${str}`;
  }

  return res;
}

function decode(str) {
  console.log(str);
  const res = [];
  const len = str.length;
  let i = 0;
  let j = i + 1;

  while (i < len) {
    if (str[j] === "#") {
      const charLen = parseInt(str[i]);
      res.push(str.slice(j + 1, j + charLen + 1));
      i = j + charLen + 1;
      j = i + 1;
    }
  }

  return res;
}

// const s = encode(["lint", "code", "love", "you"]);
// const s = encode(["we", "say", ":", "yes"]);
const s = encode(["hello", "wo#rld", "!"]);
console.log(decode(s));
