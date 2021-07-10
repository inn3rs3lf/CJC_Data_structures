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

// The main use case for Sets is to remove duplicate values in arrays!
const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
// We would like to know what positions we have at the restaurant
// Create a new Set with the staff array
// Because arrays are iterable, we can convert the Set to an array with the unique values
// We can add the new Set and deconstruct it at the same time. The deconstruction is taking the Set, and by using the spread operator, we can destruct the set into array values
const staffUnique = [...new Set(staff)];
console.log(staffUnique); // ['waiter', 'chef', 'manager']

// If we wanted to know the size of the array with the unique items only
// We can pass the entire array into the new Set, and then use the .size on it
console.log(
  new Set(['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter']).size
);
// Can also be written as such with the array in a variable
console.log(new Set(staff).size);

// You can also use it to see how many letters there are in a string, as a string is an iterable
console.log(new Set('Darryl').size); // 5
