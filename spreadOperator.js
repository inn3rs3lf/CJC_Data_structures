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

  orderPasta: function (ingredient1, ingredient2, ingredient3) {
    console.log(
      `Here is your delicious pasta with ${ingredient1}, ${ingredient2}, ${ingredient3}`
    );
  },
};

//////////////////////////////////////////
//////////// Spread Operator /////////////
//////////////////////////////////////////

// CAN ONLY BE USED WHEN WE BUILD A NEW ARRAY AND WHEN WE PASS ARGUMENTS INTO A FUNCTION

// Expand an array
const arr = [7, 8, 9];
// Old way of making a new array
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

// With the spread operator
const newArr = [1, 2, ...arr];
console.log(newArr); // 1, 2, 7, 8, 9

// Log individial elements of an array
console.log(...newArr);

// Create a new menu of the restaurant object
// NB* this does not change the original array
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy Array - shallow copy
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays or more
// Log the entire food menu, both startes and main
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 's.'];
console.log(letters);
console.log(...str);

// REAL WORLD EXAMPLE
// Use the array as multiple arguments in a function
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient2?'),
//   prompt('Ingredient3?'),
// ];
// restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { ...restaurant, founder: 'Guiseppe', foundedIn: 1998 };
console.log(newRestaurant);

// Shallow copy with Objects
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurant.name); // Classico Italiano
console.log(restaurantCopy.name); // Ristorante Roma
