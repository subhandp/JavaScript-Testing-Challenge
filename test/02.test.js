const sum = require('../src/02');

test('penjumlahan 2 angka', () => {
    expect(sum(5, 10)).toBe(15);
    expect(sum()).toBeNaN();

})