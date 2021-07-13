'use strict';

const openingHours = {
  // ES6 you can compute the key. Instead of manually typing in thu, you can pull it from the weekdays array
  thur: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // open 24 hours
    close: 24,
  },
};
/*

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
*/

//////////
// MAPS //
//////////

// Maps are able to map values to keys - Basic assignment
// Example: name => Classica Italiano
// In objects, keys are always strings. However, in Maps, it can be any data type

// Easiest way to make a Map, is to make an empty Map, and then fill it in
const rest = new Map();
// Key will be name => value will be Classico Italiano
rest.set('name', 'Classico Italiano');
// Let us state that the rest is available in two locations:
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

// You can easily chain the different sets:
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

// In order to read the values, we use the get() method:
// You just pass in the key - you need to use the correct data type!
console.log(rest.get('name')); // 'Classico Italiano'
console.log(rest.get(true)); // 'We are open'

// Practical example:
const time = 21; // Time is 9pm
// Check to see if the answer is a boolean of either true or false, and print the reltive answer according to the rest Map (ln 84, Ln 85)
console.log(rest.get(time > rest.get('open') && time < rest.get('closed')));

// We can see if a Map has a certain key
console.log(rest.has('categories')); // true

// We can delete a key from the Map
rest.delete(2); // Deleted 2, 'Lisbon'
console.log(rest);

// To check the size of a Map
console.log(rest.size);

// Remove all elements
// rest.clear();

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Incorrect'],
]);
console.log(question);

// Convert objects to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

/////////////////////////
// ITERATING OVER MAPS //
/////////////////////////

console.log(question.get('question'));

for (const [key, value] of question) {
  // If the array key is a number then print it
  if (typeof key === 'number') {
    // Print the key (number) and then the value
    console.log(`Answer ${key}: ${value}`);
  }
}
const answer = Number(prompt('Your Answer'));
console.log(answer);
console.log(question.get(question.get('correct') === answer));
