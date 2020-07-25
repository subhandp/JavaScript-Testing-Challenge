const prime = require('../src/05');

test('Bilangan prima', () => {
    expect(prime(5)).toBeTruthy();
    expect(prime(6)).toBeFalsy();
})