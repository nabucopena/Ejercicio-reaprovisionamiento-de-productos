const nextPurchase = require("../src/nextPurchase_monthly.js");

test("nextPurchase: bimonthly", () => {
  expect(nextPurchase(["2020-01-01", "2020-03-01"])).toEqual("2020-05-01");
});

test("nextPurchase: monthly", () => {
  expect(nextPurchase(["2020-01-01", "2020-02-01", "2020-03-01"])).toEqual(
    "2020-04-01"
  );
});

