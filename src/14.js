const isIsogram = (text) => { return new Set(text.toLowerCase()).size === text.length }

module.exports = isIsogram;