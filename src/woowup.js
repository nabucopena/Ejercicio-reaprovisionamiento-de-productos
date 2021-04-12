const nextPurchase = require("./nextPurchase_monthly.js");

function nextPurchaseByProduct(customerPurchases) {
  return nextPurchasesFromProducts(
    productsFromPurchases(customerPurchases.customer.purchases)
  );
}

function productsFromPurchases(purchases) {
  let products = {};
  purchases.forEach((purchase) => {
    purchase.products.forEach((product) => {
      if (products[product.sku]) {
        products[product.sku].dates.push(purchase.date);
      } else {
        products[product.sku] = {
          sku: product.sku,
          name: product.name,
          dates: [purchase.date],
        };
      }
    });
  });
  return products;
}

function nextPurchasesFromProducts(products) {
  return Object.keys(products)
    .filter((sku) => products[sku].dates.length > 1)
    .map((sku) => ({
      sku: sku,
      name: products[sku].name,
      date: nextPurchase(products[sku].dates),
    }));
}

module.exports = { nextPurchaseByProduct };
