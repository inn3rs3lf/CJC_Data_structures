'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focacia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// DESTRUCTURING
const arr = [2, 3, 4];
const [x, y, z] = arr;
console.log(x, y, z); // 2, 3, 4

// const [first, second] = restaurant.categories;
let [main, , secondary] = restaurant.categories; // the , , will skip the element
console.log(main, secondary); // 'Italian', 'Pizzeria'

// With destructuring you can simply reasign as such
[main, secondary] = [secondary, main];
console.log(main); // 'Vegatarian'

// Return the order from a function
console.log(restaurant.order(2, 0));
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(`Your order is ${starter} with your ${mainCourse}`);

// Nested arrays with destructuring
const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i, j);
//Destructuring within destructuring
const [a, , [c, d]] = nested;
console.log(a, c, d);

// Setting the default values incase the array is shorter than we think
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // It does not overwite the actual array value
