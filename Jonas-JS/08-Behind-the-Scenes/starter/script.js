'use strict';

/*

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1986) {
      var millenial = true;

      // Creating NEW variable with same name as outer scopes variable
      const firstName = 'Steven';

      // Reassigning outer scopes variable
      const output = 'NEW OUTPUT';

      const str = `Oh, and you are millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(true);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Hasan';
console.log(calcAge(1983));
// console.log(age);
// printAge();

*/

// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'Teacher';
const year = 1991;

// Functions
console.log(addDecl(3, 4));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}
const addExpr = function (a, b) {
  return a + b;
};
var addArrow = (a, b) => a + b;

// Example

if (!numProducts) deleteShopingCart();

var numProducts = 10;

function deleteShopingCart() {
  console.log(`All products deleted`);
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.x);
console.log(z === window.x);
