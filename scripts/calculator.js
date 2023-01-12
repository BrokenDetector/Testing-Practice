const calculator = {
    add: function (num1, num2) {
        return num1 + num2;
    },

    subtract: function (num1, num2) {
        return num1 - num2;
    },

    divide: function (num1, num2) {
        const result = num1 / num2;
        return Math.round(result);
    },

    multiply: function (num1, num2) {
        return num1 * num2;
    }
};

module.exports = calculator;