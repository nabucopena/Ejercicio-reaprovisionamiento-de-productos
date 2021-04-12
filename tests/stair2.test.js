const { stair } = require("../src/stair2.js");

test("stair2: 1", () => {
  expect(stair(1)).toEqual(1)
});

test("stair2: 5", () => {
  expect(stair(5)).toEqual(8)
});

