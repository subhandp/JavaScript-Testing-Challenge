const User = require('../src/11');

test('Find user', () => {
    const user = new User();
    expect(user.findByUsername('johndoe')).toEqual({ id: 3, username: 'johndoe', name: 'John Doe' });
})