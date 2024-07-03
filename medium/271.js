// 271. Encode and Decode Strings
/*
function encode(strs) {
  let str = "";
  for (const i of strs) str += `${i.length}#${i}`;

  return str;
}
function decode(str) {
  const strs = [];
  const len = str.length;
  let current = 0;

  while (current < len) {
    let delimiter = current;
    while (str[delimiter] !== "#") {
      delimiter++;
    }

    const wordLen = parseInt(str.slice(current, delimiter));
    const word = str.slice(delimiter + 1, delimiter + 1 + wordLen);
    strs.push(word);
    current = delimiter + 1 + wordLen;
  }

  return strs;
}
*/
/*
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
*/
function encode(strs) {
  let str = "";
  for (const i of strs) {
    str += `${i.length}#@${i}`;
  }
  return str;
}
function decode(str) {
  const res = [];
  let i = 0,
    j = i + 1,
    len = str.length;
  while (i < len) {
    const delimiter = str.slice(j, j + 2);
    if (delimiter === "#@") {
      j += 2;
      const wordLen = parseInt(str[i]);
      res.push(str.slice(j, j + wordLen));
      i = j + wordLen;
      j = i + 1;
    }
  }
  return res;
}
let s = encode(["lint", "code", "love", "you"]);
let t = encode(["we", "say", ":", "yes"]);
console.log(decode(s));
console.log(decode(t));
