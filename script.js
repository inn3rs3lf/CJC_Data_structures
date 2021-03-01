'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // A FUNCTION WITH OBJECTS AS ARGUMENTS
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

// CALLING FUNCTION WITH OBJECT AS ARGUMENT
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via Del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

// Using default properties for time, and mainIndex, as it is not declared in the below object
restaurant.orderDelivery({
  address: 'Via Del Sole, 21',
  starterIndex: 1,
});
/////////////////////////////////////
/////// DESTRUCTURING OBJECTS ///////
/////////////////////////////////////

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Reasign properties to variable names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default value for objects, is an empty array (If the object value doesn't exist)
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables while working with objects
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

// Wrap it in parenthesis to avoid Javascript thinking the {} is a code bloc
({ a, b } = obj);
console.log(a, b);

// Nested object destructuring
const {
  fri: { open: o, close: c }, // Assigning different variables
} = openingHours;
console.log(o, c);

////////////////////////////////////
/////// DESTRUCTURING ARRAYS ///////
////////////////////////////////////

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// // Destructuring an array
// const [x, y, z] = arr;
// console.log(x, y, z);

// // You can rename the "variable" whatever you like. It will go per the indexing. So the first two indexes can be called - first, second. This can be called whatever you want.
// const [first, second] = restaurant.categories;
// console.log(first, second); // Prints the restaurant.categories[0] and r.s[1]

// // Skip an index in an array - just leave a blank space
// let [main, , secondary] = restaurant.categories;

// // Switching variables - main, secondary to sedondary, main
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // Receive two return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // Nested destructuring arrays
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default value for variables when destructuring
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);
