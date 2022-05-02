const { NotImplementedError } = require('../extensions/index.js');

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
    constructor(mode = true) {
        this.alf = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
        this.dict = new Set(this.alf);
        this.reverceMode = !mode;
    }

    encrypt(txt, key) {
        let msg = [];
        let arrtxt = txt.split('');
        let arrkey = key.split('');
        let indx = 0;
        for (indx; indx < txt.length; indx++) {
            if (this.dict.has(arrtxt[indx])) {

                let a = this.alf.indexOf(arrtxt[indx]);
                let b = this.alf.indexOf(arrkey[indx % key.length]);
                msg.push((a + b) % this.dict.length)
            } else {
                msg.push(arrtxt[indx]);
            }
        }
        if (this.mode) msg.reverse();
        msg.join('').toUpperCase();
    }

    decrypt(txt, key) {
        let msg = [];
        let arrtxt = txt.split('');
        if (this.mode) arrtxt.reverse();
        let arrkey = key.split('');
        let indx = 0;
        for (indx; indx < txt.length; indx++) {
            if (this.dict.has(arrtxt[indx])) {
                let a = this.alf.indexOf(arrtxt[indx]);
                let b = this.alf.indexOf(arrkey[indx % key.length]);
                msg.push((a - b) % this.dict.length)
            } else {

            }
        }
        msg.join().toUpperCase();
    }
}

module.exports = {
    VigenereCipheringMachine
};