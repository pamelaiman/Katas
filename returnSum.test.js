const sum = require("./returnSum");

test("sum returns the sum of two numbers", () => {
    expect(sum(3,2)).toBe(5)
    expect(sum(-5,5)).toBe(0)
    expect(sum(102, 98)).toBe(200)
    expect(sum(10,0)).toBe(10)
});