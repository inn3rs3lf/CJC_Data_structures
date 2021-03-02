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

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

////////////////////////////////////
/////////// REST PATTERN ///////////
////////////////////////////////////

// 1) Destructuring

// SPREAD ON RIGHT HAND SIDE
const arr = [1, 2, ...[3, 4]];
console.log(arr);

// REST IN LEFT HAND SIDE

// You first use an array of variables to store the data from the actual array you are destructuring
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 6);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinach');
restaurant.orderPizza('Mushrooms');
/*
////////////////////////////////////
///////// SPREAD OPERATOR //////////
////////////////////////////////////

const arr = [7, 8, 9];
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArray);

const newArr = [1, 2, ...arr];
console.log(newArr); // [1, 2, 7, 8, 9]

console.log(...newArr); // 1, 2, 7, 8, 9 - not as an array, but their individual numbers

// Add a value to an array with the spread operator CREATING a new array
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join arrays together
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables arrays, strings, maps and sets but NOT OBJECTS
const str = 'Jonas';
const letters = [...str, ' ', 'S'];
console.log(letters);
console.log(...str);

///// REAL WORLD EXAMPLE ////
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// console.log(ingredients);

//restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundIn: 1998, ...restaurant, founder: 'Guiseppi' };
console.log(newRestaurant);

// Shallow copies
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Italian Name yo';
console.log(restaurantCopy, restaurant);



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

*/
