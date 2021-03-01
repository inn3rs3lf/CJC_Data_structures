'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

////////////////////////////////////
/////// DESTRUCTURING ARRAYS ///////
////////////////////////////////////

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// Destructuring an array
const [x, y, z] = arr;
console.log(x, y, z);

// You can rename the "variable" whatever you like. It will go per the indexing. So the first two indexes can be called - first, second. This can be called whatever you want.
const [first, second] = restaurant.categories;
console.log(first, second); // Prints the restaurant.categories[0] and r.s[1]

// Skip an index in an array - just leave a blank space
let [main, , secondary] = restaurant.categories;

// Switching variables - main, secondary to sedondary, main
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive two return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring arrays
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default value for variables when destructuring
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

////////////////////////////////////
/////// DESTRUCTURING OBJECTS ///////
////////////////////////////////////
