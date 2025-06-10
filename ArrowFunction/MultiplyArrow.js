const multiply = (a, b) => a * b;

const calculateTotal = (price, quantity) => multiply(price, quantity);


const total = calculateTotal(50, 3);
console.log("Total:", total);
