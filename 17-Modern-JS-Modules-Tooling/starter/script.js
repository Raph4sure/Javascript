// Importing module

// import {addToCart, totalPrice as price, qty} from './shoppingCart.js';
// console.log('Importing module');

// addToCart("biro", 9);

// console.log(price, qty);

/* console.log('Importing module');

import * as ShoppingCart from './shoppingCart.js'
ShoppingCart.addToCart('pencil', 8); */

// import add from './shoppingCart.js';
// add('beer', 7);

// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);

/* // Top level await/Getting a return value from an async function
const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();

// Not a clean code
// lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2); */

// Closures
/* const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 647;
  const totalQuantity = 34;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart and the shipping cost is ${shippingCost}`
    );
  };
    
      const orderStock = function (product, quantity) {
        cart.push({ product, quantity });
        console.log(
          `${quantity} ${product} from supplier`
        );
      };
    
    return {
        addToCart,
        cart,
        totalPrice,
        totalQuantity
    }
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('bread', 9);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost); */


import cloneDeep from '../node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'sardine', quantity: 3 }
  ],
  user: { loggedIn: true },
};

// Normal way of cloning a data
const stateClone = Object.assign({}, state);
console.log(stateClone);

// Using Leaflet to clone
const stateDeepClone = cloneDeep(state);
console.log(stateDeepClone);


// changing the data
// state.user.loggedIn = false;
// console.log(stateClone);
// console.log(stateDeepClone);