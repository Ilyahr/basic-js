class VigenereCipheringMachine {
    constructor(isDirectMachine, languageCode) {
        switch (isDirectMachine) {
            case undefined:
            case true:
                this.isDirectMachine = true; break;
            default:
                this.isDirectMachine = false; break;
        }
        this.initAlphabetConstants(languageCode);
    }

    initAlphabetConstants(languageCode) {
        switch (languageCode) {
            case 'ruRU':
                this.START_LETTER = 'А'; this.ALPHABET_LENGTH = 33; break;
            case 'enUS':
            case 'enGB':
            default:
                this.START_LETTER = 'A'; this.ALPHABET_LENGTH = 26; break;
        }
    }

    encrypt(message, key) {
        return this.encryptDecrypt(message, key, true);
    }

    decrypt(encryptedMessage, key) {
        return this.encryptDecrypt(encryptedMessage, key, false);
    }

    encryptDecrypt(message, key, isEncryption) {
        if (arguments.length < 2 ||
            typeof message !== 'string' ||
            typeof key !== 'string') throw new Error;

        // if isEncryption = true is passed -> then encrypt
        // else if isEncryption = false is passed -> then decrypt

        // make unitary form of message & key
        message = message.toUpperCase();
        key = key.toUpperCase();

        // get parsed message in MESSAGE
        const startLetter = this.START_LETTER;
        const endLetter = String.fromCharCode(
            this.START_LETTER.charCodeAt() + this.ALPHABET_LENGTH);
        const MESSAGE = message.split('').filter(letter => {
            if (letter >= startLetter && letter <= endLetter)
                return letter;
        }).join('');

        const startLetterCode = startLetter.charCodeAt();
        let resultArr = [];
        let indexAtParsedMessage = -1;

        for (let i = 0; i < message.length; i++) {
            let letter = message[i];
            if (letter >= startLetter && letter <= endLetter) {
                indexAtParsedMessage++;
                let K = key[indexAtParsedMessage % key.length].charCodeAt()
                    - startLetterCode;
                if (isEncryption) {
                    let M = MESSAGE[indexAtParsedMessage].charCodeAt()
                        - startLetterCode;
                    resultArr += String.fromCharCode(
                        ((M + K) % this.ALPHABET_LENGTH) + startLetterCode
                    );
                } else { let C = MESSAGE[indexAtParsedMessage].charCodeAt()
                        - startLetterCode;

                    if (C - K < 0) resultArr += String.fromCharCode(
                            ((C - K + this.ALPHABET_LENGTH)
                                % this.ALPHABET_LENGTH) + startLetterCode
                        );
                    else resultArr += String.fromCharCode(
                            ((C - K) % this.ALPHABET_LENGTH) + startLetterCode
                        );
                }
            } else {
                resultArr += letter;
            }
        }
        return this.isDirectMachine ?
            resultArr : resultArr.split('').reverse().join('');
    }
}
module.exports = VigenereCipheringMachine;