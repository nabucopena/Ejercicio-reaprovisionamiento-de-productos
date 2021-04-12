const date_fns = require("date-fns");

function nextPurchase_monthly(purchases) {
  let sum = 0;
  for (let i = 1; i < purchases.length; i++) {
    let diff = date_fns.differenceInMonths(
      date_fns.parseISO(purchases[i]),
      date_fns.parseISO(purchases[i - 1])
    );
    sum += diff;
  }
  return date_fns.format(
    date_fns.addMonths(
      date_fns.parseISO(purchases[purchases.length - 1]),
      sum / (purchases.length - 1)
    ),
    "yyyy-MM-dd"
  );
}

module.exports = nextPurchase_monthly;
