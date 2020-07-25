const charLength = require('../src/01');

test('Hitung jumlah karakter pada string', () => {
    expect(charLength('subhan')).toBe(6);
    expect(charLength(5)).toBeUndefined();

})