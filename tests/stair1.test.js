const { stair } = require("../src/stair1.js");

test("stair1: 1", () => {
  expect(stair(1)).toEqual(1)
});

test("stair1: 5", () => {
  expect(stair(5)).toEqual(8)
});

