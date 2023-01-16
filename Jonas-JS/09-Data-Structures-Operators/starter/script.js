'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [`day-${2 + 2}`]: {
    open: 12,
    close: 22,
  },
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
};
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  // another way of writing methods
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
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
///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
// POSTO JE SCORED ARRAY MORAMO NA OVAJ NACIN DA ZAPISUJEMO
const scoredGoal = game.scored.entries();
for (let [i, name] of scoredGoal) {
  console.log(`Goal: ${i + 1}: ${name}`);
}
// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
const value = Object.values(game.odds);
console.log(value);
let sum = 0;
for (let i of value) {
  sum += i;
}
const average = sum / value.length;
console.log(average.toFixed(2));

//3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

// const team1 = game.team1;
// const team2 = game.team2;
// const odd = Object.values(game.odds);
// console.log(`Odd of victory ${team1}: ${odd[0]} `);
// console.log(`Odd of draw: ${odd[1]} `);
// console.log(`Odd of victory ${team2}: ${odd[2]} `);

const entrie = Object.entries(game.odds);
let poruka = '';
for (let [team, odd] of entrie) {
  poruka +=
    team === 'x'
      ? `Odd of draw: ${odd}\n`
      : `Odd od victory ${game[team]}: ${odd}\n`;
}
console.log(poruka);
// BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
//       {
//         Gnarby: 1,
//         Hummels: 1,
//         Lewandowski: 2
//       }
// BONUS
// So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
console.log(game.scored);
let scorers = {};
for (const name of game.scored) {
  scorers[name] ? scorers[name]++ : (scorers[name] = 1);
}
console.log(scorers);

/*

// Object Keys, Values, Entries

// Property names
const properties = Object.keys(openingHours);
console.log(properties);
let openStr = `we are open on ${properties.length} days: `;

for (const day of Object.keys(openingHours)) {
  openStr += `${day},`;
}
console.log(openStr);

// Property values

const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
console.log(entries);

// [key,value] - posto je ovde value object mozemo da ga destructurujemo
for (const [key, { open, close }] of entries) {
  console.log(`on ${key} we open at ${open} and close at ${close}`);
}
*/

/*
// Optional chaining
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon?.open);

// WITH optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? `closed`;
  console.log(`on ${day} we opet at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method doesnt exist');
console.log(restaurant.orderRisoto?.(0, 1) ?? 'Method doesnt exist');

// Arrays
// const user = [{ name: 'Jonas', email: 'hello@jonas.io' }];
const user = [];

console.log(user[0]?.name ?? 'User array empty');
if (user.length > 0) console.log(user[0].name);
else {
  console.log(`user array empty`);
}
*/

/*
// The for-of Loop

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
// console.log([...menu.entries()]);
*/

///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
const team1 = game.odds.team1;
const draw = game.odds.x;
const team2 = game.odds.team2;

// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);


let team1W = team1 > team2 && 'Team 1 ima vise sansi za pobedu';
let team2W = team1 < team2 && 'Team 2 ima vise sansi za pobedu';
let message = team1W || team2W;
console.log(message);

const substitute = ['Thiago', 'Coutinho', 'Perisic'];
const players1Final = [...game.players[0], ...substitute];
console.log(players1Final);
const allPlayers = [...game.players[0], ...game.players[1]];
// console.log(allPlayers);
const [gk, ...fieldPlayers] = game.players[[0]];
console.log(gk, fieldPlayers);
function neka(...broj) {
  console.log(`${broj}, goals scored ${game.scored.length}`);
}
neka(game.scored);
*/
/*
const rest1 = {
  name: 'Capri',
  // numGuest: 20,
  numGuest: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// OR assignmet=nt operator //
// rest1.numGuest = rest1.numGuest || 10;
// rest2.numGuest = rest2.numGuest || 10;

// rest1.numGuest ||= 10;
// rest2.numGuest ||= 10;

// nullish assignment operator (null or undefined)
rest1.numGuest ??= 10;
rest2.numGuest ??= 10;

// AND assignmet=nt operator //

// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

// IF YOU EVER NEDD TO ASSIGN A VALUE TO A VARIABLE THAT IS ALREDY DEFINED, THAT HAS A VALUES THAT IS CURRENTLY TRUTHY, THEN YOU CAN USE AND ASSIGNMENT OPERATOR
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1, rest2);
*/

/*
restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

// Nullish values: null and undefined (NOT 0 or '')
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);
*/

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
