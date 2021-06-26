'use strict';

/////////////////////////////////////////
///////// Destructuring Arrays///////////
/////////////////////////////////////////

const restaurant = {
  name: "Classico Italiano",
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto']
};

// Original method to assign variables from an array
const arr = [2,3,4];
const a = arr[0] // 2
const b = arr[1] // 3
const c = arr[2] // 4

// By using the destructuring method
// Takes each variable in the [] and assigns the corresponding value from the array
const [x, y, z] = arr;
console.log(x, y, z); // 2, 3, 4

// Take the first two categories from the restaurant object
const [first, second] = restaurant.categories
console.log(first, second); // 'Italian', 'Pizzeria'