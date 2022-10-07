const employee = require('../lib/manager');

test ('getName manager', () => {
    expect(getName()).toEqual(expect.any(String));
});

test ('GetId manager', () => {
    expect(GetId()).toEqual(expect.any(Number));
});

test ('getEmail manager', () => {
    expect(getEmail()).toContainEqual(expect.any("@, .com"));
});

//overridden to return manager
test ('getRole manager', () => {
    expect(getRole()).toContainEqual(expect.toBe('manager'));
}); 