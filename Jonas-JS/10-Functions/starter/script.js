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

/*
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
*/

/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas');

const greet2 = greeting => {
  return name => {
    console.log(`${greeting} ${name}`);
  };
};

greet2('Cao')('Hasan');
*/

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function(){}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({
      flight: `${this.airline} flight ${this.iataCode}${flightNum}`,
      name,
    });
  },
};

// Call method
lufthansa.book(239, 'Hasan Mujanovic');
lufthansa.book(635, 'John Smith');
const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Doesnt work
// book(23, 'Sarah Williams');

book.call(eurowings, 23, 'Sarah Wiliams');
console.log(eurowings);

book.call(lufthansa, 253, 'Jonas Schdfsa');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Line',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 243, 'Mary Cooper');

// Apply method
const flightData = [574, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

// Bind method
book.call(eurowings, 23, 'Sarah Wiliams');

const bookEW = book.bind(eurowings);
const bookLM = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(234, 'Steven Wiliams');
console.log(eurowings);

// preset an argument (Partial aplication)
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schsdanja');
bookEW23('Marta Cooper');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));

const example = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const example2 = example(0.23);
console.log(example2(100));
console.log(example2(200));
