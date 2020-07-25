const repeatString = require('../src/06');

test('Repeat string', () => {
    expect(repeatString('*', 5)).toBe('*****');
    expect(repeatString('subhan dinda putra')).toBe('subhan dinda putra');

})