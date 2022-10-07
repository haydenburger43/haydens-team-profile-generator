const employee = require('../lib/engineer');

test ('getName engineer', () => {
    expect(getName()).toEqual(expect.any(String));
});

test ('getId engineer', () => {
    expect(GetId()).toEqual(expect.any(Number));
});

test ('getEmail engineer', () => {
    expect(getEmail()).toContainEqual(expect.any("@, .com"));
});

//overriden to say engineer
test ('getRole engineer', () => {
    expect(getRole()).toContainEqual(expect.toBe('engineer'));
});

test ('getGithub engineer', () => {
    expect(getGithub()).toContainEqual(expect.any(".com"));
});