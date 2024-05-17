// 271. Encode and Decode Strings

// function encode(strs) {
//   const str = strs.join(";#");

//   return str;
// }
// function decode(str) {
//   const strs = [...str.split(";#")];

//   return strs;
// }

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
