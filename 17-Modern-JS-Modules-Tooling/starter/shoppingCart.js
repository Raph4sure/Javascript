// Exporting module
console.log('Exporting module');

// Blocking code 
/* console.log('start');
await fetch('https://jsonplaceholder.typicode.com/users');
console.log('finished'); */

const shippingCost = 10;
const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 647;
const totalQuantity = 34;

export { totalPrice, totalQuantity as qty };
  
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

