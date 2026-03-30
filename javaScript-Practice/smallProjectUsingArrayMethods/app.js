// ---- Mini Project: Shopping Cart Data Processing
//Sample Data
const cart = [
  { id: 1, name: "Laptop", price: 60000, quantity: 1 },
  { id: 2, name: "Mouse", price: 800, quantity: 2 },
  { id: 3, name: "Keyboard", price: 1500, quantity: 1 },
  { id: 4, name: "Monitor", price: 12000, quantity: 2 },
];

// Transform Data Using map()
const itemNames = cart.map(item => item.name);
console.log(itemNames);

//Select specfic items Using filter()
const expensiveItems = cart.filter(item => item.price > 5000);
console.log(expensiveItems);

//Aggregate values Using reduce()
const totalCost = cart.reduce((sum, item) => {
    return sum + item.price * item.quantity;
},0);
console.log(totalCost);

//Get one matching item Using find()
const findMouse = cart.find(item => item.name === "Mouse");
console.log(findMouse);

// Boolean check Using some() and every()
const hasCheapItem = cart.some(item => item.price < 1000);
console.log(hasCheapItem);

const allAffordable = cart.every(item => item.price < 70000);
console.log(allAffordable);

// Perform side effects Using forEach()
cart.forEach(item => {
    console.log(`${item.name} x ${item.quantity}`);
})