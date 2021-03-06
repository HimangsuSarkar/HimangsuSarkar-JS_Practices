'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
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

  orderDelivery: function ({address='Van del sole ,21',time='22:00',mainIndex=1,starterIndex}) {
   console.log(`oder delivered ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be send ${address} at ${time}`);
 }
};
//spread  operator
const arr = [7, 8, 9]
const badArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

const menu = [restaurant.starterMenu,...restaurant.mainMenu];
console.log(menu)

//Iterable :arrays,string,maps, but not object

const str = 'Jonas';
const letter = [...str, " ", "S."];
console.log(letter);

console.log(...str);

// console.log(`${...str}`)

// restaurant.orderDelivery({
//   time: "23:00",
//   address: 'Van del sole ,21',
//   mainIndex: 2,
//   starterIndex:2,
  
// })

// restaurant.orderDelivery({
  
//   starterIndex:2,
  
// })
// //object destructing

// const { name, openingHours, categories } = restaurant;
// // console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags } = restaurant;
// // console.log(restaurantName, hours, tags);

// //default values
// const { menu= [], starterMenu: starter = [] } = restaurant

// // console.log(menu,starter);
  
// //mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj)
// // console.log(a, b);

// //Nested object
// const { fri:{open:o,close:c} } = openingHours;
// console.log(o,c);

//array destructuring

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// console.log(a, b, c);

// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;


// // const temp = main;
// // main = secondary;
// // secondary = temp;

// [main, secondary] = [secondary, main];
// console.log(main, secondary);