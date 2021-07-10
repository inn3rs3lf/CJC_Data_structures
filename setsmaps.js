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
// ordersSet.clear(); // removes the entire set
console.log(ordersSet);

// You cannot retreive an item from a set like you would be able to do with arrays arr = [item[0]].
// Due to the fact that the set wouldn't have any duplicates, you are able to check if the set has the item by using the .has() method on it.
// If you need tos tore data in a specific order, then an array would be the better option.

// You can loop over Sets the same as you can with arrays
for (const order of ordersSet) console.log(order);
