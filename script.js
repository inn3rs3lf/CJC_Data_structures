'use strict';

/////////////////////////////////////////
///////// Destructuring Arrays///////////
/////////////////////////////////////////

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic-Bread', 'Caprese Salad'],
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
      open: 0, // open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received: ${this.starterMenu[starterIndex]}, ${this.mainMenu[mainIndex]}, will be delivered at ${time}, to ${address}`
    );
  },
};

/*
// Original method to assign variables from an array
const arr = [2, 3, 4];
const a = arr[0]; // 2
const b = arr[1]; // 3
const c = arr[2]; // 4

// By using the destructuring method
// Takes each variable in the [] and assigns the corresponding value from the array
const [x, y, z] = arr;
console.log(x, y, z); // 2, 3, 4

// Take the first two categories from the restaurant object
const [first, second] = restaurant.categories;
console.log(first, second); // 'Italian', 'Pizzeria'

// Skip a value by merely using an empty space in the declaration
const [firstCat, , thirdCat] = restaurant.categories;
console.log(firstCat, thirdCat); // 'Italian', 'Vegetarian'

// Reassigning the categories for the restaurant
let [main, secondary] = restaurant.categories; // lists it as norm
console.log(main, secondary); // 'Italian', 'Pizzeria'

// Swapping the order of the array elements using destructuring (MUTATING)
[main, secondary] = [secondary, main];
console.log(main, secondary); // 'Pizzeria', 'Italian'

// Assign the array elements to the destructured variables of starter and mainCourse
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested
// console.log(i, j);

// Nested destructuring
const [i, , [j, k]] = nested; // Just destruct within a destructured array
console.log(i, j, k);

// Default values if we do not know the length of the array but need the elements within it
const [p, q, r] = [8, 9];
console.log(p, q, r); // r would be undefined as there is no value in the original array

// We set default values
const [s = 1, t = 2, u = 3] = [10, 11];
console.log(s, t, u); // 10, 11, 3 - 3 has been set as the default as there is no actual element within the array


//////////////////////////////////////////
///////// Destructuring Objects //////////
//////////////////////////////////////////

// Use {} for objects, and order doesn't matter
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Reassigning variable names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

// Set default values
const { menu = [] } = restaurant; // menu is now an empty array

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

// Nested objects
const {
  fri: { open, close },
} = openingHours;

console.log(open, close);

// Call the method on line 32
restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 2,
});
*/
