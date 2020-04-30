const dummy_a = require('./index');

test('expected output:', () => {
    const t = dummy_a().then(() => {
        expect(t).toBe("name: ");
    });

});