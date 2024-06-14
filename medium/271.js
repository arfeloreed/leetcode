// 271. Encode and Decode Strings

// function encode(strs) {
//   const str = strs.join(";#");

//   return str;
// }
// function decode(str) {
//   const strs = [...str.split(";#")];

//   return strs;
// }

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

console.log(encode(["hello", "wo#rld", "!"]));
console.log(decode(encode(["hello", "wo#rld", "!"])));
*/

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
