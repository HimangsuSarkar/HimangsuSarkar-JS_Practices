 'use strict';

// function calcAge(birthYear) {
//   const age = 2022 - birthYear;
//   // console.log(firstName);

//   function printAge() {
    
//     let output = `${firstName} ,you age is ${age} ,your birth year ${birthYear}`;
//     console.log(output);
    
//     if (birthYear >= 1986 && birthYear <= 1996) {
//       let firstName = 'Steven';
//       var millioner = true;
//       const str = `oh!${firstName} you are a millioner`;
//       console.log(str);

//       function add(a,b) {
//         return a + b;
//       }
//       console.log(add(2, 3));
//       const output = 'new output';
//       console.log(output)
//     }
    
//     console.log(millioner);
//     // console.log(str);
//   }
//   // console.log(output);
//   printAge();
//   return age;

// }

// const firstName = 'Jonas';
// calcAge(1991);


//variables hosting

// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = 'jonas';
// let job = 'Teacher';
// const year = 1991;

// //function hosting
// console.log(addDecl(2, 4));
// // console.log(addExpr(2, 4));
// // console.log(addArrow(2, 4));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// }

// const addArrow = (a, b) => a + b;

// //example
// console.log(undefined);
// if (!numberProducts) deleteShoppingCard();

// var numberProducts = 10;

// function deleteShoppingCard() {
//   console.log("all products deleted");
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z=== window.z);

console.log(this);

const calcAge=function (birthYear) {
  console.log(2022 - birthYear);
  console.log(this);
}

calcAge(1991);

const calcAgeArrow=(birthYear)=> {
  console.log(2022 - birthYear);
  console.log(this);
}
calcAgeArrow(1997);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  }

}
jonas.calcAge();

const matilda={
  year:2022,
}
matilda.calcAge = jonas.calcAge;

matilda.calcAge();

