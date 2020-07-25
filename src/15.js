const baseRoman = { "M": 1000, "D": 500, "C": 100, "L": 50, "X": 10, "V": 5, "I": 1 }

function roman(romanNumber) {
    const array = romanNumber.split('');
    let total = 0;
    let currentValue, next, nextValue;

    array.map((v, i) => {
        currentValue = baseRoman[v]
        next = array[i + 1];
        nextValue = baseRoman[next];

        if (currentValue < nextValue) {
            total -= (currentValue);
        } else {
            total += (currentValue);
        }
    })

    return total;
}

module.exports = roman;