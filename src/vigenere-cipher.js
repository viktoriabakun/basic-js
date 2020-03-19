const ALPHABET_LENGTH = 26;
class VigenereCipheringMachine {
    constructor(direct = true) {
        this.direct = direct;
        return this;
    }

    encrypt(message, key) {
        return this.doCipher(message, key, true);
    }

    decrypt(message, key) {
        return this.doCipher(message, key, false); 
    }
    
    doCipher(message, key, encrypt = true) {
        if (message === undefined || key === undefined) throw Error;

        const extendedKey = key.toUpperCase().repeat(Math.ceil(message.length / key.length));
        const result = [];
        message = message.toUpperCase();
  
          for (let i = 0, keyIndex = 0; i < message.length; i++) {
              let char = message[i];
              if(!/[A-Z]/i.test(char)) result.push(char); 
              else {
                  let msgCharCode = char.charCodeAt();
                  let keyCharCode = extendedKey[keyIndex].charCodeAt();
                  keyIndex++;
                  let resCharCode;
                  if(encrypt === true) {
                      resCharCode = (msgCharCode + keyCharCode) % ALPHABET_LENGTH + "A".charCodeAt();
                  } else {
                      resCharCode = (msgCharCode - keyCharCode) % ALPHABET_LENGTH + "A".charCodeAt();
                      if(resCharCode < "A".charCodeAt()) {
                          resCharCode = resCharCode + ALPHABET_LENGTH;
                      }
                  }
                  result.push(String.fromCharCode(resCharCode));
              }
          }
        if(!this.direct) result.reverse();
        return result.join('');
      }
}

module.exports = VigenereCipheringMachine;
