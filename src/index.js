const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let localExpr = expr;

    let decode_table = { '10': '.', '11': '-' };

    let result = '';

    while (localExpr.length > 0) {

        let binaryCode = localExpr.slice(0, 10);



        if ('**********' === binaryCode) {
            result += ' ';
            localExpr = localExpr.slice(10);
            continue;
        }
        let letter = '';
        let morseCode = '';
        while (binaryCode.length > 0) {
            let part = binaryCode[0] + binaryCode[1];
            if (part == '00') {
                binaryCode = binaryCode.slice(2);
                continue;
            }

            morseCode += decode_table[part];

            binaryCode = binaryCode.slice(2);
        }
        letter = MORSE_TABLE[morseCode];


        result += letter;
        localExpr = localExpr.slice(10);
    }
    return result;

}

module.exports = {
    decode
}