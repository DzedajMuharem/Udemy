// Importing module
// import { addToCart, totalPrice as price, qt } from './shoppingCart.js';
// addToCart('bread', 15);
// console.log(price, qt);
console.log('Importing module');
// console.log(shippingCost)

// import * as ShoppingCart from './shoppingCart.js';

// ShoppingCart.addToCart('bread', 15);
// console.log(ShoppingCart.totalPrice);

// import add, { addToCart, totalPrice as price, qt } from './shoppingCart.js';
// console.log(price);

import add, { cart } from './shoppingCart.js';

add('pizza', 2);
add('apples', 4);
add('bread', 5);

console.log(cart);
