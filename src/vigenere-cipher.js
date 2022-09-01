/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
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
  constructor(isDirecrMode = true) {
    this.alf = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    this.n = this.alf.length
    this.isReverceMode = !isDirecrMode;
  }

  encrypt = (msg, key) => this.converte(msg, key, this.encryptChar)
  decrypt = (msg, key) => this.converte(msg, key, this.decryptChar)

  encryptChar = (k, m) => (m + k) % this.n
  decryptChar = (k, m) => k > m ? this.n - (k - m) : m - k

  converte = (msg, key, resolver) => {
    if (msg === undefined || key === undefined) throw new Error('Incorrect arguments!')
    msg = msg.toUpperCase();
    key = key.toUpperCase();
    let result = [msg.length];
    let correctiveShiftForKey = 0;
    for (let pos = 0; pos < msg.length; pos++) {
      let charOfMsg = msg.charAt(pos);
      let m = this.alf.indexOf(charOfMsg);
      if (m != -1) {
        let charOfKey = key.charAt((pos - correctiveShiftForKey) % key.length);
        let k = this.alf.indexOf(charOfKey);
        let charOfRes = this.alf.charAt(resolver(k, m));
        result[pos] = charOfRes;
      } else {
        result[pos] = charOfMsg;
        correctiveShiftForKey++;
      }
    }
    if (this.isReverceMode) result.reverse();
    return result.join('').toUpperCase();
  }
}

module.exports = {
  VigenereCipheringMachine
};