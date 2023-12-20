const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * Our machine will have 2 modifications: **direct** and **reverse** 
 * (the type of machine is determined at the moment of creation).
 *  The **direct** machine simply encodes and decodes the string that was transmitted to it,
 *  and the **reverse** machine returns an **inverted** string after encoding and decoding.

Your task is to implement the class `VigenereCipheringMachine`. 
`constructor` of this `class` accepts `true` (**or nothing**)
 to create **direct** machine and `false` to create **reverse** machine.
Each instance of `VigenereCipheringMachine` must have 2 methods: `encrypt` and `decrypt`. 

`encrypt` method accepts 2 parameters: `message` (`string` to encode) 
and `key` (`string`-keyword).

`decrypt` method accepts 2 parameters: `encryptedMessage` 
(`string` to decode) and `key` (`string`-keyword).

These parameters for both methods are **mandatory**. 
If at least one of them has not been given, an `Error` with message `Incorrect arguments!` must be thrown. The text returned by these methods must be **uppercase**. Machines encrypt and decrypt **only latin alphabet** (all other symbols remain unchanged).

You don't need to validate value sent to `constructor` and to `encrypt` and `decrypt` methods (except throwing an `Error` on absence of argument for these methods).


 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(type) {
    this.type = type === false ? 'reverse' : 'direct'
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  }
  getOffset(letter) {
    return this.alphabet.indexOf(letter)
  }
  buildKey(message, key) {
    const repeated = key.repeat(Math.ceil(message.length / key.length))
    let res = ''
    let offset = 0
    for (let i = 0; i < message.length; i++) {
      if(message[i] === ' ') {
        offset += 1
        res += ' '
      } else {
      	res += repeated[i - offset]
      }
    }
    return res
  }
  encryptOnly(message, key) {
    const newKey = message.length > key.length ? this.buildKey(message, key) : key
    let res = ''
    for (let i = 0; i < message.length; i++) {
      const originalOffset = this.getOffset(message[i])
      if (originalOffset === -1) {
        res += message[i]
      } else {
        const additionalOffset = this.getOffset(newKey[i])
        res += this.alphabet[(originalOffset + additionalOffset) % 26]
      }
    }
    return res
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!')
    }
    const res = this.encryptOnly(message.toUpperCase(), key.toUpperCase())
    return this.type === 'direct' ? res : res.split('').reverse().join('')
  }
  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!')
    }
    const res = this.decryptOnly(message.toUpperCase(), key.toUpperCase())
    return this.type === 'direct' ? res : res.split('').reverse().join('')
  }
  decryptOnly(message, key) {
    const newKey = message.length > key.length ? this.buildKey(message, key) : key
    let res = ''
    for (let i = 0; i < message.length; i++) {
      const originalOffset = this.getOffset(message[i])
      if (originalOffset === -1) {
        res += message[i]
      } else {
        const additionalOffset = this.getOffset(newKey[i])
        let decodedOffset = originalOffset - additionalOffset
        decodedOffset += decodedOffset < 0 ? 26 : 0
        res += this.alphabet[decodedOffset]
      }
    }
    return res
  }
}

module.exports = {
  VigenereCipheringMachine
};
