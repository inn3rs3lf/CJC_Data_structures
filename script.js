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

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },

  leaveIngredient: function (food, rest) {
    console.log(food);
    console.log(rest);
    let input = specialOrder.toString();
    if (input === food) {
      console.log(
        `You have decided to leave ${food} off your pizza. So we have made one with ${rest}`
      );
    }
  },
};
let food = ['Onion', 'Ham', 'Cheese'];
let specialOrder = prompt(`what would you like to leave out of your pizza? 
${food}`);
let rest = [...food];

restaurant.leaveIngredient(specialOrder, rest);

// // Rest operator
// // collects multiple elemenst and packs them into an array
// // REST is on the left hand side of the assignment operator =
// // MUST be the last element/s of an array

// // SPREAD
// const arr = [1, 2, ...[3, 4]];
// // REST
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others); // 1, 2, [3, 4, 5]

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// // REST on Objects
// // It will be the remainder
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays); // thur, fri

// // REST in functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// // Real-world example
// restaurant.orderPizza('mushrooms', 'ham', 'onion', 'spinach');

// // Spread Operator
// Unpacks elements into an array
// SPREAD is on the right hand side of the assignment operator =
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // Copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// // Join 2 arrays or more
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// // Works on all iterables
// const str = 'iterable';
// console.log(...str);

// // Real-world example
// const ingredients = [
//   prompt("Let's make some pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// restaurant.orderPasta(...ingredients);

// // Spread operator on Objects
// // Add a founder key to the Object as well when it was opened
// // Order does not matter
// const newRestaurant = { foundedIn: '1997', ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// const copyRestaurant = { ...restaurant };
// copyRestaurant.name = 'Chillies';
// console.log(copyRestaurant);
// console.log(restaurant);

// // DESTRUCTURING OBJECTS
// const { name, openingHours, categories } = restaurant;
// console.log(openingHours);

// // Change key to a different variable
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // Setting defaults if a key doesn't exist
// const { menu = [], starterMenu = [] } = restaurant;
// console.log(menu, starterMenu); // menu will now be an empty array

// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

// // Nested Objects
// const {
//   // fri is an object, so use same syntax
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// // Calling objects in a function parameter
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });
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
