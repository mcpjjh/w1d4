//CALLBACKS
//because functions are first class values, functions can be passed as arguments and be received as
// const does not allow you to ever reassign it vs. let allows you to like var
//but you can change parts of const
// const prices = [];  can change parts of it by:
//prices.push(5);
//prices.splice(0,1);
// cannot prices = [1]; completely resetting but can't you technically change the entire thing by using push and slice?

const calculateTotal = function() {
  let total = 0;
  for (var i = 0; i <this.prices.length; i++) {
     total += this.prices[i];
   }
  return total;
  }

const calculateTotalWithTax = function(prices) {
  let total = 0;
  for(let i = 0; i < prices.length; i++) {
    total += (prices[i] * 0.13);
  }
  return total;
}

const cartTotal = function(callback) {
  const prices = [5, 12, 18];
  return callback(prices;)
}

const withoutTax = cartTotal(calculateTotal); //you don't pass a reference inside the function calculateTotal because it's a callback
//and the expected reference, prices, is not in the scope so it can't reach it anyways?
const withTax = cartTotal(calculateTotalWithTax);