'use strict';
/*
const bookings = [];
const createBooking = function (
  flightNumber,
  numOassengers = 1,
  price = 199 + numOassengers
) {
  // ES5 way of doing
  //   numOassengers = numOassengers || 1;
  //   price = price || 199;
  const booking = {
    flightNumber,
    numOassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 210);

createBooking('LH123', undefined, 1000); // way to skip parameter
*/

/*
const flightNumber = 'LH231';
const jonas = {
  name: 'Jonas Schasd',
  passport: 2344532,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH123';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 2344532) {
    console.log('check in');
  } else {
    console.log('wrong passport');
  }
};
checkIn(flightNumber, jonas);
// console.log(flightNumber);
// console.log(jonas);
// // Is the same as doing...
// const flight = flightNumber;
// const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random()) * 100000000;
};
newPassport(jonas);
checkIn(flightNumber, jonas);
*/

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirst = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};
transformer('JavaScript is the best', upperFirst);
transformer('JavaScript is the best', oneWord);

// JS uses callback all the time
const high5 = function () {
  console.log('wavemoji');
};

document.body.addEventListener('click', high5);

['Jonas', 'Marth', 'Adam'].forEach(high5);
