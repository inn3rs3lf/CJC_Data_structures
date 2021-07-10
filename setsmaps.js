'use strict';

//////////
// SETS //
//////////

// Sets are a data structure introduced in ES6
// The are a collection of unique values
// They can therefore never have any duplicates

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet); // prints all but the duplicates

console.log(new Set('Jonas')); // {'J', 'o', 'n', 'a', 's'}

console.log(ordersSet.size); // How many unique values are in the set

// Check to see if a set has certain value
// You use the has() method, much like the includes() method for arrays
console.log(ordersSet.has('Pizza')); // true
console.log(ordersSet.has('Bread')); // false

// We can add and delete a value to a Set
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
console.log(ordersSet);
