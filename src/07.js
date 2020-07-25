function repeatLetter(text, times = 1) {
    return text.split('').map((letter) => {
        return letter.trim() !== '' ? letter.repeat(times) : letter;
    }).join('');
}

module.exports = repeatLetter;