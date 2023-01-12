function reverseString(string) {
    const split = string.split("");
    const reverse = split.reverse();
    return reverse.join("");
};

module.exports = reverseString;