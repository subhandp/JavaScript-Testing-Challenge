const mebiToKibi = require('../src/03');

test('Mebibyte ke Kibibyte', () => {
    expect(mebiToKibi(2)).toBe('2048 kibibytes');
    expect(mebiToKibi(2)).toContain('kibi');

})