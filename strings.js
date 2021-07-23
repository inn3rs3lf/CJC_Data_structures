'use strict';

const airline = 'TAP air Portugal';
const plane = 'A320';

// Get a character at a certain position using array syntax
console.log(plane[0]); // A
console.log(plane[1]); // 3
console.log(plane[2]); // 2
console.log('B737'[0]); // B

// Get the length
console.log(airline.length); // 16
console.log('B737'.length); // 4

// Find the position of a certain chartacter
console.log(airline.indexOf('r')); // 6
console.log(airline.lastIndexOf('r')); // 10
// You can search entire words ( Case sensitive )
console.log(airline.indexOf('Portugal')); // 8

// SLICE - The value is where the extraction starts
console.log(airline.slice(4)); // air Portugal
// With an end parameter - The end parameter stops at the value
// The length of the extracted string will always be the end value - extraction value
console.log(airline.slice(4, 7)); // air (3)
// Extract the first word of a string when you do not know it
// We start at position 0 - first character
// We end at the first ' ' which would be indexOf(' ').
console.log(airline.slice(0, airline.indexOf(' '))); // TAP
// Extract the last word of string
// lastIndexOf(' ') will provide the last instance of a space - meaning the next word would be the last.
// It will however include the space, an we therefore have to + 1 space
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Portugal

// extracts the last two characters
console.log(airline.slice(-2)); // al
// we can start wherever, and end wherever
// starts at the [1] index, and ends at the last (l) - 1 = a
console.log(airline.slice(1, -1)); // AP air Portuga

// Write a function that receives an airplane seat
// Logs to the console if it is a middle seat, or not

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  // A and F are end

  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat');
  else console.log('You got lucky');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

// Convert a passenger name to the correct case
const passenger = 'jOnAS';
// Put all characters to lower case
const passengerLowerCase = passenger.toLowerCase();
// Take the first letter and capitalise it
// Then extract the remaining characters, and concatinate it
const passengerCorrectCase =
  passengerLowerCase[0].toUpperCase() + passengerLowerCase.slice(1);
console.log(passengerCorrectCase);

// Create a function for the above example so it can take any name as a parameter
const correctCase = function (name) {
  const passengerLowerCase = name.toLowerCase();
  const passengerCorrectCase =
    passengerLowerCase[0].toUpperCase() + passengerLowerCase.slice(1);
  console.log(passengerCorrectCase);
};
correctCase('peTER');

// Compare Emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';

const lowerEmail = loginEmail.toLowerCase();
// trim method removes white space in a string
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);
// Chaining methods to make it easier
const normEmail = loginEmail.toLowerCase().trim();
console.log(normEmail);
// Check to see if they are the same
console.log(email === trimmedEmail); // true

// REPLACE PARTS OF STRINGS
const priceGB = '288,97£';
// .replace(What you want to be replaced, What you want it replaced with)
// Replace the £ with a $, and the comma with a period
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

// REPLACE WHOLE WORDS
const announcement =
  'All passengers come to boarding door 23, Boarding door 23!';
console.log(announcement.replaceAll('door', 'gate'));

// BOOLEANS
const airplane = 'Airbus A320neo';
// Lets us check if the string includes a word, a character or the like
console.log(airplane.includes('A320')); // true
console.log(airplane.includes('neo')); // true
console.log(airplane.startsWith('Neo')); // false
console.log(airplane.startsWith('Airbus')); // true

// Check to see if the plane is part of the new airbus family
if (airplane.startsWith('Airbus') && airplane.endsWith('neo'))
  console.log('Part of the new airbus family');

// Check if the passengers back can be checked in
const checkBaggage = function (items) {
  // Always convert to lowercase!
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed on board');
  } else {
    console.log('Welcome aboard');
  }
};
checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
