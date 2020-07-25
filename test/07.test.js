const repeatLetter = require('../src/07');

test('Repeat letter', () => {
    expect(repeatLetter('Hello World! ', 2)).toBe('HHeelllloo WWoorrlldd!! ');
    expect(repeatLetter('Hello World! ', 2)).toMatch(/HHeelllloo(\s)WWoorrlldd!!(\s)/i)
})