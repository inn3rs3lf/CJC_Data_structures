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
  // You can also destructure more by placing default values within the function if the property doesn't exist
  orderDelivery({ starterIndex = 1, mainIndex, time, address }) {
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]}, ${this.mainMenu[mainIndex]}, at ${time}, delivered to ${address}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}`);
  },
  // This method has to have at least one ingredient
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
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

// Nested Objects
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

// Practical example with the object above (ln 29)
restaurant.orderDelivery({
  time: '23:00',
  address: '170, 7th Road',
  mainIndex: 2,
  // starterIndex: 2, // commented out for the default value to be shown
});


////////////////////////
//The Spread Operator //
////////////////////////

// We use the spread operator when we need the elements of an array individually. Also when we need to pass multiple elements into a function
// We can also only use it where we would need values seperated by commas. It does not lend itself to adding new variables, such as destructuring itself.

// Combining two arrays with the spread operator
const arr = [7, 8, 9];
// We use the ... and the name of the first array we wish to combine with the new one - ...arr. The spread operator individually unpacks the values of the first array, and does not just throw the array in such as [1, 2, arr] which would print [1, 2, [7, 8, 9]].
const newArr = [1, 2, ...arr];
console.log(newArr); // 1, 2, 7, 8, 9

// Restaurant example (ln 7)
// We want to add a new item to the mainMenu
// We can then print each individual item from the mainMenu with the spread operator, and add the new item, or items and store it in a new array
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu); // 'Pizza', 'Pasta', 'Risotto', 'Gnocci'

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];
// Join two or more arrays together
// You can just unpack each array into individual elements with the spread operator for each array you will be unpacking, and place them in a new array
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// The spread operator can be used on all iterables: strings, arrays, sets and maps - but NOT Objects!
const str = 'Jonas';
const letters = [...str];
console.log(letters); // 'J'. 'o', 'n', 'a', 's'
console.log(...letters); // J o n a s (Not Jonas - note the spaces)

// Order pasta
// const ingredients = [
//   prompt('What is your first ingredient?'),
//   prompt('What is your second ingredient?'),
//   prompt('And your third?'),
// ];
// You can now expand the array and place it into each individual variable in the function (ln 35)
// restaurant.orderPasta(...ingredients);

// With objects
// You can add new keys to an object
const newRestaurant = { founder: 'Guiseppe', ...restaurant };
console.log(newRestaurant);

const hours = { ...restaurant.openingHours, Wed: { open: 10, close: 11 } };
console.log(hours);

// You can make shallow copies and reasign variables on the copy
const restaurantCopy = { ...restaurant }; // copies the entire restaurant object into a new copy
restaurantCopy.name = 'Ristorante Roma'; // we change the name of the copy
console.log(restaurantCopy);

////////////////////////////////
//Rest Pattern and Paramaters //
////////////////////////////////

// Unlike the Spread Operator, the Rest Pattern packs elements into an array
// It takes the rest of the array that is not used in the destructuring assignment

// Rest syntax is on the left of the assignment operator

// ...others takes 3,4,5 and stores it into an array
const [a, b, ...others] = [1, 2, 3, 4, 5]; // [1, 2, [ 3, 4, 5]

// We can use both REST and SPREAD
// We can take the two elements from the mainMenu and store it in the variables pizza and risotto, and then take the remaining food, and place it in the array otherFood by using the REST pattern - as it is taking the rest of the items
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Rest patterns in Objects
// To store the data from an Object, you can assign the key to the variable, and it will take all the infomation in that key. Using restaurant.openingHours will take each key within openingHours, and assign it accordingly.
const { sat, ...weekDays } = restaurant.openingHours;
console.log(sat);

// REST operator with Functions

// Create a function that can take in any amount of arguments and add them together
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(2, 3); // 5
add(5, 3, 7, 2); // 17
add(8, 2, 5, 3, 2, 1, 4); // 25

// We can use the spread operator to take the elements and individually parse them into the function we created above and entered into the ...numbers parameter, and added back into an array. This function then can serve both spread and rest
const x = [23, 5, 7];
add(...x);

// This takes the arguments and places them into an array if needed, collecting them together
restaurant.orderPizza('Cheese', 'olives', 'mushroom');
*/
////////////////////////////////
//Short Circuiting && and ||  //
////////////////////////////////
