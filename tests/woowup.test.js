const { nextPurchaseByProduct } = require("../src/woowup.js");

const sample = {
  customer: {
    purchases: [
      {
        number: "B001-002306",
        date: "2020-01-01",
        products: [
          { sku: "101", name: "Cat Chow 1KG" },
          { sku: "102", name: "Tidy Cats 2KG" },
        ],
      },
      {
        number: "B001-002307",
        date: "2020-01-15",
        products: [{ sku: "103", name: "Royal canin cat ultra light pouch" }],
      },
      {
        number: "B001-002308",
        date: "2019-02-01",
        products: [{ sku: "101", name: "Cat Chow 1KG" }],
      },
      {
        number: "B001-002309",
        date: "2020-03-01",
        products: [
          { sku: "101", name: "Cat Chow 1KG" },
          { sku: "102", name: "Tidy Cats 2KG" },
        ],
      },
    ],
  },
};

test("nextPurchaseByProduct: base sample", () => {
  expect(nextPurchaseByProduct(sample)).toEqual([
    { sku: "101", name: "Cat Chow 1KG", date: "2020-04-01" },
    { sku: "102", name: "Tidy Cats 2KG", date: "2020-05-01" },
  ]);
});
