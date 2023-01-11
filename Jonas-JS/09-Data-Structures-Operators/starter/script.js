'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order recieved: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delievered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1},${ing2},${ing3}`);
  },

  orderPizza: function (mianIngridient, ...otherIngridients) {
    console.log(`Your pizza will have ${mianIngridient}, ${otherIngridients}`);
    console.log(mianIngridient, otherIngridients);
  },
};

/*

// Short circuiting (&& and ||)

console.log('--------------OR---------');
// Use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);
restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('--------------AND ---------');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'Jonas');

if (restaurant.orderPizza) {
  restaurant.orderPizza('Spinaxh', 'Mushrrom');
}

restaurant.orderPizza && restaurant.orderPizza('Mushrrom','Spinach')

*/

/*

// Rest pattern and parameters

// 1) Destructuring

//SPREAD, BEACUSE ON RIGHT SIDE OF =
const arr = [1, 2, ...[3, 4]];
console.log(arr);

// REST BEACUSE ON LEFT SIDE OF =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

// rest elemnt mora biti na kraju
const [pizza, , rissoto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, rissoto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i of numbers) {
    sum += i;
  }
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 3, 5, 2, 4, 5, 2);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('Mushroom', 'onion', 'olives', 'spinach');

*/

// restaurant.orderPizza('mushroom');

/*

// Spread operator //
const arr = [7, 8, 9];
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArray);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Coppy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays, or more
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables are arrays, strings, maps, and sets, but not objects
const str = 'Jonas';
const letters = [...str, '', 'S'];
console.log(letters);
console.log(...str);
// console.log(`${...str} Schmedtmann`) // Ne moze ovako da se koristi

// Real-world example
const ingridents = [
  // prompt(`Let\'s make pasta! Ingridient 1?`),
  // prompt(`Let\'s make pasta! Ingridient 2?`),
  // prompt(`Let\'s make pasta! Ingridient 3?`),
];
console.log(ingridents);
restaurant.orderPasta(...ingridents);

// Objects

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name, restaurant.name);

*/
/*
restaurant.orderDelivery({
  time: '23:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});
restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 2,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables

let a = 111;
let b = 99;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested objescts
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/

/*
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

console.log(restaurant.order(2, 0));

// Recieve 2 return values from function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];

// Nested destrecturing
// const [i, , j] = nested;
// console.log(i, j);

// destructuring inside of destructuring
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
