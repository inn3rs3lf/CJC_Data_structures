'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focacia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 12,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `${this.starterMenu[starterIndex]}, with ${this.mainMenu[mainIndex]}, will be delievered at ${time}, at ${address}`
    );
  },
};

// DESTRUCTURING OBJECTS
const { name, openingHours, categories } = restaurant;
console.log(openingHours);

// Change key to a different variable
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Setting defaults if a key doesn't exist
const { menu = [], starterMenu = [] } = restaurant;
console.log(menu, starterMenu); // menu will now be an empty array

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

// Nested Objects
const {
  // fri is an object, so use same syntax
  fri: { open, close },
} = openingHours;
console.log(open, close);

// Calling objects in a function parameter
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});
// // DESTRUCTURING ARRAYS
// const arr = [2, 3, 4];
// const [x, y, z] = arr;
// console.log(x, y, z); // 2, 3, 4

// // const [first, second] = restaurant.categories;
// let [main, , secondary] = restaurant.categories; // the , , will skip the element
// console.log(main, secondary); // 'Italian', 'Pizzeria'

// // With destructuring you can simply reasign as such
// [main, secondary] = [secondary, main];
// console.log(main); // 'Vegatarian'

// // Return the order from a function
// console.log(restaurant.order(2, 0));
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(`Your order is ${starter} with your ${mainCourse}`);

// // Nested arrays with destructuring
// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
// //Destructuring within destructuring
// const [a, , [c, d]] = nested;
// console.log(a, c, d);

// // Setting the default values incase the array is shorter than we think
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r); // It does not overwite the actual array value
