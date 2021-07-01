'use strict';
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
      open: 0,
      close: 24,
    },
  },

  order(starterIndex, mainIndex) {
    // starterIndex and mainIndex are the item positions in the array that are being passed as arguments
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};
/*
// What is destructuring?
// Destructuring is breaking down arrays and objects and storing the elements into easy to use variables

//////////////////////////
// Destructuring Arrays //
/////////////////////////

// Declare an array
const arr = [2, 3, 4];
// Destructure it by placing the variables you wish to store the data in, on the left hand side of the assignment operator encapsulated between []. Then set that to the array you wish to destructure
const [a, b, c] = arr;
// You can now log out the valaues by using the newly assigned variables.
console.log(a, b, c);

// Destructuring the category section of the restaurant array (ln 6).
// You do not have to store all variables and values. You can pick which ones you wish to store
const [first, second] = restaurant.categories;
console.log(first, second); // 'Italian', 'Pizzeria'

// You can also skip a value
const [firstCat, , thirdCat] = restaurant.categories;
console.log(firstCat, thirdCat); // 'Italian', 'Vegetarian'

// You can switch variables
let [main, secondary] = restaurant.categories;
[main, secondary] = [secondary, main]; // reassign
console.log(main, secondary); // 'pizzeria', 'italian'

// Assign variables to a function that immediately returns values (ln 9)
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested arrays
const nested = [2, 4, [5, 6]];
// To print the first value, and the nested array itself
const [e, , g] = nested;
console.log(e, g);
// To print all the individual values within the first array - destructuring within destructuring
const [h, i, [j, k]] = nested;
console.log(h, i, j, k);

// You can set default values if you do not know the length of the array
const [l, m, n = 1] = [8, 9];
console.log(l, m, n); // n would be undefined if it didn't have the default value of 1 - as there is no array value being assigned to it.
*/
/////////////////////////////
// Destructuring Objects ///
////////////////////////////

// Objects require the exact property names in order to destruture them. Unlike Arrays where you can use any variables you would like.
// Objects also do not care as to what order the variables are placed in, as the property names correlate to that of the object itself
const { name, openingHours, categories } = restaurant;

// If you would like the variables to be different to the property names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// You can set default values when you do not have hard coded data, such as the menu variable.
// You can also reasign a variable, as well as set it to a default value at the same time such as starterMenu
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables (Switching, swapping)
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
// You can't use const or let due to a and b already being assigned above. You also do not want to reassign the variable.
// You need to wrap it in ()
({ a, b } = obj);
console.log(a, b);
