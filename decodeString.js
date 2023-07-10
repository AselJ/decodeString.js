

function decodeString(code) {
  let number;
  if (+code[0]) {
      number = +code[0];
  } else {
      return "Invalid code.";
  }

  const messageChars = [];
  for (let i = 1; i < code.length; i++) {
      let newCharCode = code[i].charCodeAt(0) + number;
      if (newCharCode > 122) {
          newCharCode -= 26;
      }
      messageChars.push(String.fromCharCode(newCharCode));
  }

  const message = messageChars.join('');
  return message;
}

console.log(decodeString('1a')); // b
console.log(decodeString('3ce')); // fh
console.log(decodeString("2fcjjm")); // hello
console.log(decodeString('4g')); // k

