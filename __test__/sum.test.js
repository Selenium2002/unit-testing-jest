const theSumOfNums = require("../sum");

test("return num + 5", () => {
    expect(theSumOfNums(10)).toBe(10);
});

test("return num + 5", () => {
    expect(theSumOfNums(35, 45)).toBe(80);
});

test("return the addition of all numbers", () => {
    expect(theSumOfNums(40, 50, 10, 100, 5, 10, 30, 80)).toBe(325);
});

