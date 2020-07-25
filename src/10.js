function censor(text, censoredWords, censorSymbol) {
    censoredWords.map((censor) => {
        text = text.replace(new RegExp(censor, 'gi'), censorSymbol.repeat(censor.length))
    })
    return text;
}

module.exports = censor;