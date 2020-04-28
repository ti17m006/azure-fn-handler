const dummy_a = require('./index');

test('expected output:', () => {
    const t = dummy_a('Some text of mine', null);
    expect(t).toBe("name: Dummy-A");
});