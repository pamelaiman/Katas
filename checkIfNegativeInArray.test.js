const checkIfNegative = require("./checkIfNegativeInArray");

test("Checks if there is a negative number in an array of numbers or strings", () => {
    expect(checkIfNegative([1,2,3,4])).toBe(false)
    expect(checkIfNegative(["hey", "no", 2, -1, "negative"])).toBe(true)
    expect(checkIfNegative([])).toBe(false)
    expect(checkIfNegative([-2])).toBe(true)
});