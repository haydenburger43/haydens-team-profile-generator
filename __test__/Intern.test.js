const employee = require('../lib/intern');

test ('getName intern', () => {
    expect(getName()).toEqual(expect.any(String));
});

test ('GetId intern', () => {
    expect(GetId()).toEqual(expect.any(Number));
});


test ('getEmail intern', () => {
    expect(getEmail()).toContainEqual(expect.any("@, .com"));
});

//overridden to say intern
test ('getRole intern', () => {
    expect(getRole()).toContainEqual(expect.toBe('intern'));
});

test ('getSchool intern', () => {
    expect(getSchool()).toEqual(expect.any(String));
});