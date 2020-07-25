// ['ibu ratna antar ubi',
//     'kasur ini rusak',
//     'A nut for a jar of tuna.',
//     'A nut for a jar of tuna.',
//     'Borrow or rob?',
//     'Was it a car or a cat I saw?',
//     'Yo, banana boy!',
//     'UFO tofu?'
// ].map((str) => {
//     const text = str.replace(/\W/gi, "").toLowerCase()
//     const reverseText = text.split("").reverse().join("")
//     return console.log(text === reverseText);
// });

function symmetrical(value) {
    if (typeof value === 'number')
        return value === parseInt(value.toString().split('').reverse().join(''))
    else if (typeof value === 'string')
        return value === value.replace(/\W/gi, "").toLowerCase().split('').reverse().join('')
}

module.exports = symmetrical;