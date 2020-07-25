const isIsogram = require('../src/14');

test('Isogram', () => {
    expect(isIsogram('gelas')).toBeTruthy();
    expect(isIsogram('makan')).toBeFalsy();

})