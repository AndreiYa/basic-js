const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  
  constructor(direction) {
    if (direction === true || direction === undefined) {
      this.direction = true;
    } else {
      this.direction = false;
    }
  }

  codeIt(message, key, method) {
    let messageUp,
      keyUp,
      encryptArr = [],
      cryptStr = '';
 
    let index = 0;
  
    messageUp = message.toUpperCase();
    keyUp = key.toUpperCase();

    for (let i = 0; i < messageUp.length; i++) {
      let currentCode = messageUp[i].charCodeAt();
      if (currentCode >= 65 && currentCode <= 90) {
        if (method === 'encrypt') {
          cryptStr = String.fromCharCode((currentCode + keyUp.charCodeAt(index)) % 26 + 65); 
        } else{
          cryptStr = String.fromCharCode(((currentCode + 26) - keyUp.charCodeAt(index)) % 26 + 65);
        }
        encryptArr.push(cryptStr);
        if (index !== keyUp.length - 1) {
          index++;
        } else {
          index = 0;
        }
      } else {
        encryptArr.push(messageUp[i]);
      }
      
    }
    return this.direction ? encryptArr.join('') : encryptArr.reverse().join('');
  }
encrypt(message, key) {
  if (!key && !message) {
    throw Error;
  } else {
    return this.codeIt(message, key, 'encrypt', false);
  }
}
decrypt(message, key) {
  if (!key && !message) {
    throw Error;
  } else {
    return this.codeIt(message, key, 'decrypt', true);
  }
}
  
}
module.exports = VigenereCipheringMachine;
