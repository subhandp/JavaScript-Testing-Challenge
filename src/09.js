function symmetrical(value) {
    if (typeof value === 'number')
        return value === parseInt(value.toString().split('').reverse().join(''))
    else if (typeof value === 'string')
        return value === value.replace(/\W/gi, "").toLowerCase().split('').reverse().join('')
}

module.exports = symmetrical;