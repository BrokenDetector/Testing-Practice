function caesarCipher(string) {
    const key = 3;
    let ciphertext = "";
    const re = /[a-z]/;
    for (let i = 0; i < string.length; i++) {
        if (re.test(string.charAt(i))) {
            ciphertext += String.fromCharCode((string.charCodeAt(i) - 97 + key) % 26 + 97);
        }
        else {
            ciphertext += string.charAt(i);
        };
    };
    return ciphertext;
};

module.exports = caesarCipher;