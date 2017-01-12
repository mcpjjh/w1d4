
var empty = "";

var countdownGenerator = function (x) {


  return function () {
      if (x > 0) {
        empty = "T-minus " + x + "...";
        // console.log(empty);
      }
      else if (x === 0) {
        empty = "Blast Off!";
        // console.log(empty);
      }
      else {
        empty = "Rockets already gone, bub!";
        // console.log(empty);
      }
      console.log(empty);
      x = x - 1; // or x--;
  }

};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!


var name = 'Ben'

name = ' is awesome'

name