const employee = require('../lib/employee');

 test ('getName employee', () => {
    expect(getName()).toEqual(expect.any(String));
 });

test ('GetId employee', () => {
    expect(GetId()).toEqual(expect.any(Number));
});

test ('getEmail employee', () => {
    expect(getEmail()).toContainEqual(expect.any("@, .com"));
});

test ('getRole employee', () => {
    expect(getRole()).toContainEqual(expect.any(string));
});