'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   console.log(firstName);
//   printAge();

//   function printAge() {
//     const output = `${firstName} You are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);
//     }
//   }
//   return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);

// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Jonas';
// let job = 'teacher';
// const year = `1991`;

// console.log(addExpr(2, 3));

// function addDec(a, b) {
//   return a + b;
// }

// var addExpr = function (a, b) {
//   return a + b;
// };
// var addArrow = (a, b) => a + b;
// console.log(numProducts);
// if (!numProducts) deleteShoppingCart();

// let numProducts = 10;

// function deleteShoppingCart() {
//   console.log(`All products deleted`);
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2038 - birthYear);
//   console.log(this);
// };
// // calcAge(1991);

// const calcAgeArrow = birthYear => {
//   console.log(2038 - birthYear);
//   console.log(this);
// };

// // calcAgeArrow(1991);

// const jonas = {
//   year: 1991,
//   hair: 'alot',
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },

//   calcHair: function () {
//     console.log('alot of hair');
//   },
// };

// jonas.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge;
// matilda.calcHair = jonas.calcHair;
// matilda.calcAge();

// const f = jonas.calcAge;
// console.log(f);
// f();

// const jonas = {
//   year: 1991,
//   firstName: 'Jonas',
//   calcAge: function () {
//     console.log(2037 - this.year);

//     const self = this;
//     const isMillenial = function () {
//       console.log(self);
//       console.log(self.year >= 1981 && self.year <= 1996);
//     };

//     isMillenial();
//   },

//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };

//     isMillenial();
//   },
//   greet: () => console.log(`Hey ${this.firstName}`),
// };

// jonas.greet();
// jonas.calcAge();

// const addExpr = function (a, b) {
//   console.log(arguments);
//   arguments.callee
//   return a + b;
// };

// addExpr(2, 5);
// addExpr(2, 5, 5);

// const age = 30;
// const oldAge = age;
// age = 31;
// console.log(age, oldAge);

// const me = {
//   name: 'Jonas',
//   age: 30,
// };

// const friend = me;
// friend.age = 27;
// console.log(friend, me);

// let lastName = 'Williams';
// let oldLastName = lastName;
// lastName = 'Davis';

// console.log(lastName, oldLastName);

// const jessica = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
// };

// const marriedJessica = jessica;
// marriedJessica.firstName = 'Dank';
// console.log(marriedJessica);

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['ALice', `Bob`],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

jessicaCopy.lastName = 'Dave';
console.log(jessica2);
console.log(jessicaCopy);
