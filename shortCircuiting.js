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

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },
};

/////////////////////////////
/////////  OR ||  ///////////
/////////////////////////////

// Use Any data type
// Return any data type
// Short-circuiting:
// If the first value is a truthy value, it will immediatley return it, and not even look at the second value.

console.log(3 || 'Jonas'); // 3
console.log('' || 'Jonas'); // 'Jonas'
console.log(true || 0); // true
console.log(undefined || null); // null - last value as they are all falsy
console.log('' || 0 || undefined || null || NaN); // NaN - all falsy

console.log(undefined || 0 || '' || 'Hello' || 23 || null); // 'Hello' - it's the first truthy

// Example with the restaurant object

// restaurant.numGuests does not exist, so the below code is checking if it does. If it does, then assign the guests1 variable to that amount. If not, assign it to 10
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

// With the short-circuiting, the ternary is not needed in its full syntax. Due to restaurant.numGuests not being available, it will assign the first truthy value, such as the above examples.
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

//NB* if the restaurant.numGuests = 0 in the object, it will default to the truthy value, as 0 is a falsy value!

console.log('--------------------------');

////////////////////////////
/////////  AND &&  /////////
////////////////////////////

// As per the || or operator, the && is the opposite. It returns the first falsy value, or the last truthy
console.log(0 && 'Jonas'); // 0
console.log(null && ''); // null
console.log('Hello' && NaN); // NaN
console.log('Hello' && 'Jonas'); // 'Jonas'

// Practical example

// Check if the restaurant object has the orderSpinach method, if it does, order one with mushrooms and spinach
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

// Using short-ciruiting

// If the restaurant.orderPizza method does not exist, then go ahead and order it.
// Remember the && checks for falsy values!
restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');

///////////////////////////////////////////////
///////// NULLISH COELECING OPERATOR ??  //////
///////////////////////////////////////////////

// The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

console.log(null ?? undefined); // undefined
restaurant.numGuests = 0;
const guests = restaurant.numGuests ?? 10;
console.log(guests); // 0
