function analyzeArray(arr) {
    const average = () => {
        let total = 0;
        for (let i in arr) {
            total += arr[i]
        }
        return total / arr.length;
    };

    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const length = arr.length;

    const obj = {
        average: average(),
        min,
        max,
        length
    };
    return obj;
};
console.log(analyzeArray([1, 8, 3, 4, 2, 6]))

module.exports = analyzeArray;