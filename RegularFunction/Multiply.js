function multiply(a, b) {
  return a * b;
}

function calculateTotal(price, quantity) {
  return multiply(price, quantity);
}


const total = calculateTotal(50, 3);
console.log("Total:", total);
