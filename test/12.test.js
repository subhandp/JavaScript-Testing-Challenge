const Item = require('../src/12');

test('Is on sale', () => {
    const item = new Item();
    expect(item.findById(3).isOnSale()).toBeFalsy();
    expect(item.findById(5).isOnSale()).toBeTruthy();
})