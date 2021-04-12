function stair(n) {
  let r = 1;
  let r_1 = 0;
  let r_2;

  for (let i=0; i<n; i++) {
    r_2 = r_1;
    r_1 = r;
    r = r_1 + r_2;
  }

  return r
}

module.exports = { stair };
