var prices = [20, 25.12, 54];

var calculateTotal = function() { // function expression, or (cartPrices)
//or function calculateTotal(cartPrices) { // function declaration (you can call the function before the declaration = code reaches the function: function hoisting)

  var total = 0;
  for (var i = 0; i <cartPrices.length; i++) {
    total += cartPrices[i];
   }
  return total;
}

var cartTotal = calculateTotal(prices);
console.log(cartTotal);

or

console.log(prices);
console.log(cartTotal);


// arguments vs. parameters: in a way, they're the same thing. receives arguments by value

var prices = [20, 25.12, 54];

var calculateTotal = function() { // function expression, or (cartPrices)
// or function calculateTotal(cartPrices) { // function declaration (you can call the function before the declaration = code reaches the function: function hoisting)

//   var total = 0;
//   for (var i = 0; i <this.prices.length; i++) {
//     total += this.prices[i];
//   }
//   return total;
// }
//option 1 in this location

var cart = {
  prices: [24, 125.12, 62],
  calculate: calculateTotal //not actually calling the function... so it will not run. doesnt have the parentheses which is what calls the function
}

function calculateTotal() {
  var total = 0;
  for (var i = 0; i <this.prices.length; i++) {
     total += this.prices[i];
   }
  return total;
  }
}
//option 2 in this location

var total = cart.calculate();
console.log(total);

//can reference a value or can pass a reference into a function?
