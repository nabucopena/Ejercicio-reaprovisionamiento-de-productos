let memo = [1,1];
function stair(n){
  if (!memo[n]) {
    memo[n] = stair(n-1) + stair(n-2);
  }

  return memo[n];
}


module.exports = { stair };
