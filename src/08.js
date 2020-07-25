function arrayMirroring(numberList) {
    return [...numberList, ...numberList.reverse()]
}

module.exports = arrayMirroring;