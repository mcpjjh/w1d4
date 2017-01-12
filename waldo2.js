
function findWaldo(element,index) {
  if (element=== "Waldo") {
    actionWhenFound(index);   // execute callback
  }
}

function actionWhenFound(index) {
  console.log("Found Waldo at index " + index + "!");
}

["Alice", "Bob", "Waldo", "Winston"].forEach(findWaldo);


//OR



function actionWhenFound(index) {
  console.log("Found Waldo at index " + index + "!");
}


// findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
["Alice", "Bob", "Waldo", "Winston"].forEach(function (elephant, index) {
  if (elephant=== "Waldo") {
    actionWhenFound(index);   // execute callback
  }
});
