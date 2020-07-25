const isLeapYear = require('../src/04');

test('Mengecek tahun adalah kabisat', () => {
    expect(isLeapYear(2020)).toBe(true);
    expect(isLeapYear(2019)).toBe(false);

})