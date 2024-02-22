"use strict";

// let hasDriversLiscene = false;
// const passTest = true;

// if (passTest) hasDriversLiscene = true;
// if (hasDriversLiscene) console.log(`I can drive :D`);

// const interface = 'audio';

// function logger() {
//     console.log(`Hello`);
// }

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

// console.log(fruitProcessor(5, 0));

// function calAge1(birthYear) {
//     return(2037 - birthYear);
// }

// const calAge2 = function(birthYear) {
//     return (2037 - birthYear);
// }

// const age2 = calAge2(1991);
// console.log(age2, calAge1(1991));

// const calAge2 = function(birthYear) {
//     return (2037 - birthYear);
// }

//Arrow function
// const calAge3 = birthYear => 2037 - birthYear;
// console.log(calAge3(1991));

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retiring in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, "Josh"));
// console.log(yearsUntilRetirement(1994, "Jane"));

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces`;
//     return juice;
// }

// console.log(fruitProcessor(2,3));

// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter'];

// for(let i = 0; i < friends.length; i++){
//     console.log(friends[i]);
// }

// console.log(friends);

// // const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[friends.length - 1]);
// friends[2] = 'Jay';
// console.log(friends);

// const firstName = 'Jonas';
// const jonas = [firstName, 'Ong', 2037 - 1991, friends];
// console.log(jonas);

// //Exercise

// const calAge = birthYear => {
//     return 2037 - birthYear;
// }

// const years = [1990, 1967, 2002, 2010, 2018];
// const age = new Array();

// for(let i = 0; i < years.length; i++) {
//     age.push(calAge(years[i]));
// }

// console.log(age);

// const friends = ['Michael', 'Steven', 'Peter'];
// friends.push(23);
// console.log(friends.includes(23));
// console.log(friends);

// if(friends.includes(23)) {
//     friends.push(23);
//     console.log(friends);
// }

// const jonasArray = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ];

// //Object
// const jonas = {
//     firstName : 'Jonas',
//     lastName : 'Schmedtmann',
//     age : 2037 - 1991,
//     job : 'teacher',
//     friends : ['Michael', 'Peter', 'Steven']
// };

// console.log(jonas.friends);
// console.log(jonas['friends']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// const interestedIn = prompt("What do you wan to know about Jonas?");
// console.log(interestedIn);

// if(jonas[interestedIn])
//     console.log(jonas[interestedIn]);
// else
//     console.log("invalid!");

// jonas.location = 'Portugal';
// jonas['twitter'] = '@ohnonono';
// console.log(jonas);

// jonas.bestFriends = 'Michael';
// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is ${jonas.bestFriends}`);

// const jonas = {
//     firstName : 'Jonas',
//     lastName : 'Schmedtmann',
//     birthYear: 1991,
//     job : 'teacher',
//     friends : ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense : true,
//     // calAge :  function() {
//     //     console.log(this);
//     //     return 2037 - this.birthYear;
//     // }
//     calAge : function() {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },

//     jonasInfo : function() {
//        return (`${this.firstName} is a ${this.calAge()}-year old ${this.job}, and he has ${this.
//         hasDriversLicense ? 'a' : 'no'} driver's license`);
//     }

// };

// console.log(jonas.jonasInfo());

// const jonasType = new Array();
// for(let i = 0; i < 5 ;i++) {
//     console.log(jonasArray[i], typeof(jonasArray[i]));
//     jonasType.push(typeof jonasArray[i]);
// };

// console.log(jonasType);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for(let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// }

// console.log(ages);

// const jonasArray = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ];

// for(let i = 0; i < jonasArray.length; i++) {
//      console.log(typeof jonasArray[i]);
// }
// for(let i = 0; i < jonasArray.length ;i++) {
//     if(typeof jonasArray[i] !==  'object') continue;

//     console.log(jonasArray[i], typeof jonasArray[i]);
// };
