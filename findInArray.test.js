const find = require('./findInArray');
test ("Find the first element passes the test", () => {
    expect(find([10, 50, -20, -10, 100], v => v < 0)).toBe(-20)
    expect(find([10, 50, -20, -10, 100], v => v < -500)).toBe(undefined)
    expect(find([10, 50, -20, -10, 100], v => v < 20)).toBe(10)
})