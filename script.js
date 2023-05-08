// ****************************Functions****************************

// function sayHello() {
//   console.log("hello");
// }

// sayHello();

// var sayBye = function () {
//   console.log("say bye");
// };

// sayBye();

// function sing(arg) {
//   console.log(arg);
// }

// sing("oooo lalala la");
// sing("bleh blah blyuuu");

// function multiply(a, b) {
//   return a * b;
// }

// alert(multiply(5, 10));

// ***************************Data structures **************************************

// **************Arrays**************

// var list = ["lion", "tiger", "cheetah", "elephants", "deer"];
// console.log(list[2]);

// list.shift();

// list.push("bear");

// console.log(list);

// **************Objects**************
// var object = {
//   name: "anoop",
//   age: 26,
//   hobby: "swimming",
//   city: "Toronto",
//   places: ["bangalore", "kitchener", "hosur"],
// };

// console.log(object.age);

// adding a new key value pair

// object.province = "ontario";
// console.log(object);

// Accessing from a list

// console.log(object.places[2]);

//Accessing from a object

// listofarray = [
//   { name: "anoop", age: 26, hobby: "swimming" },
//   { name: "bob ", age: 23, hobby: "dancing" },
// ];

// console.log(listofarray[1].name);

//We can also add functions inside a object aka (A method)

// var object = {
//   name: "anoop",
//   age: 26,
//   hobby: "swimming",
//   city: "Toronto",
//   places: ["bangalore", "kitchener", "hosur"],
//   shout: function () {
//     console.log("Ahhhhhhhh");
//   },
// };

// console.log(object.shout());

// var newObj = {
//   username: "Anoop",
//   password: "abc123",
// };

// var database = [];
// database.push(newObj);

// var newsfeed = [
//   {
//     username: "Anoop",
//     timeline: "may",
//   },
//   {
//     username: "Bob",
//     timeline: "June",
//   },
//   {
//     username: "Anoop",
//     timeline: "July",
//   },
// ];

// console.log(newsfeed);

// var database = [
//   {
//     username: "Anoop",
//     password: "may",
//   },
// ];

// var newsFeed = [
//   {
//     username: "Anoop",
//     timeline: "So tired from all that learn",
//   },
// ];

// var usernamePrompt = prompt("what is your username?");
// var passwordPromt = prompt("what is your password?");

// function signIn(user, pass) {
//   if (user === database[0].username && pass === database[0].password) {
//     console.log(newsFeed);
//   } else {
//     alert("Sorry, wrong username and password");
//   }
// }

// signIn(usernamePrompt, passwordPromt);

// //function declaration

// function newFunction() {}

// //function expression

// var newFunction = function () {};

// //expression
// 1 + 3;
// var a = 2;
// return true;

// //calling or invoking a function
// alert();
// newFunction(param1, parma2);

// //assign a variable
// var a = true;

// //function vs method

// function thisIsAFunction() {}

// var obj = {
//   thisIsAMethod: function () {},
// };

// thisIsAFunction();
// obj.thisIsAMethod();

// var todos = ["clean room", "freshen up", "have breakfast", "do coding", "work"];
// for (var i = 0; i < todos.length; i++) {
//   console.log(todos[i] + "!");
// }

// todos.forEach(function (i) {
//   console.log(i);
// });

// function logTodos(todo, i) {
//   console.log(todo, i);
// }
// todos.forEach(logTodos);

// var counter = 0;
// while (counter <= 10) {
//   console.log(counter);
//   counter++;
// }

// var countertwo = 10;
// do {
//   console.log("do while", countertwo);
//   countertwo--;
// } while (countertwo > 0);

// var button = document.getElementById("add");
// var input = document.getElementById("userinput");
// var ul = document.querySelector("ul");

// function inputlength() {
//   return input.value.length;
// }

// function createListElement() {
//   var li = document.createElement("li");
//   li.appendChild(document.createTextNode(input.value));
//   ul.appendChild(li);
//   input.value = "";
// }

// function addListAfterClick() {
//   if (input.value.length > 0) {
//     createListElement();
//   }
// }

// function addListAfterKeypress(event) {
//   if (inputlength() > 0 && event.keyCode === 13) {
//     createListElement();
//   }
// }

// button.addEventListener("click", addListAfterClick);
// input.addEventListener("keypress", addListAfterKeypress);

// function q1() {
//   var a = 5;
//   if (a > 1) {
//     a = 3;
//   }
//   alert(a);
// }

// //3

// //#2
// var a = 0;
// function q2() {
//   a = 5;
// }

// function q22() {
//   alert(a);
// }

// //0

// //#3
// function q3() {
//   window.a = "hello";
// }

// function q32() {
//   alert(a);
// }

// //undefined

// //#4
// var a = 1;
// function q4() {
//   var a = "test";
//   alert(a);
// }

// //test

// //#5
// var a = 2;
// if (true) {
//   var a = 5;
//   alert(a);
// }
// alert(a);

// //

//***************** Ternary operator ********************

// function isuserValid(bool) {
//   return bool;
// }

// a = isuserValid(true) ? "hello world" : "bye";
// console.log(a);

// *********************switch statement******************

// function movrCommand(direction) {
//   var whatHappens;
//   switch (direction) {
//     case "forward":
//       whatHappens = "you encounter a monster";
//       break;
//     case "back":
//       whatHappens = "you encounter a demon";
//       break;
//     case "rigth":
//       whatHappens = "you encounter a god";
//       break;
//   }
//   return whatHappens;
// }

// let a = "test";
// const b = true;
// const c = 789;
// a = "test2";

// console.log(a, b, c);

// ******************** let + const ********************

// const player = "andrew";
// let experience = 100;
// let wizard = false;

// if (experience > 90) {
//   let wizard = true;
//   console.log(wizard);
// }

// console.log(wizard);

// ********************Destructuring********************

// const obj = {
//   player: "bobby",
//   experience: 4,
//   wizardlevel: false,
// };

// usually, we used to do

// const player = obj.player;
// const experience = obj.experience;
// let wizardlevel = obj.wizardlevel;

//what we can do is

// const { player, experience } = obj;

// let { wizardlevel } = obj;

// console.log(player, experience);

// ********************Object properties********************

// const name = "john snow";
// const obj = {
//   [name]: "hello",
//   [1 + 2]: "hihi",
// };

// console.log(obj);

// const a = "anoop ";
// const b = 26;
// const c = "coding";

// const obj = { a, b, c };

// console.log(obj);

// ******************* Template strings*******************

// const a = "anoop ";
// const b = 26;
// const c = "coding";

// const greeting = "Hello" + a + "i am" + b + "years old and i like" + c;

// const greeting = `Hello my name is ${a}, you seem to be ${
//   b - 1
// } years old and you like ${c}`;

// console.log(greeting);

// function greeting(a = "", b = 26, c = "coding") {
//   return `Hello my name is ${a}, you seem to be ${
//     b - 1
//   } years old and you like ${c}`;
// }

// console.log(greeting);

// ******************* Arrow functions*******************

// function add(a, b) {
//   return a + b;
// }

// c = add(2, 3);
// console.log(c);

//can be written as

// const c = (a, b) => a + b;
// console.log(c(4, 5));

//Exercises 3 //

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue",
// };

// const { firstName, lastName, age, eyeColor } = person;

// console.log(firstName);

// Object properties
// var a = "test";
// var b = true;
// var c = 789;

// var d = { a, b, c };
// console.log(d);

// Arrow functions
// function whereAmI(username, location) {
//   if (username && location) {
//     return "I am not lost";
//   } else {
//     return "I am totally lost!";
//   }
// }

// let whereAmI = (username, location) => {
//   d = username == location ? "I am not lost" : "I am totally lost!";
//   return d;
// };

// let z = whereAmI("anoop", "pop");
// console.log(z);

// ***********************************Advanced functions********************************

//closures -  The function ran, the function executed,it's never going to exercute again but remembers the references to the variables.

// const first = () => {
//   const greet = "Hi";
//   const second = () => {
//     alert(greet);                //In this case greet is not in scope of second function, but closures remembers the parent scope variable
//   };                             //but not the other way around.
//   return second;
// };

// const newFunc = first();
// console.log(newFunc());

//currying

// const multiply = (a, b) => a * b;
// const curriedMulitply = (a) => (b) => a * b;
// const multiplyBy5 = curriedMulitply(3);
// console.log(multiplyBy5);

// *******Advanced Arrays**************

// const array = [1, 2, 10, 16];

// const double = [];

// const newArray = array.forEach((num) => {
//   double.push(num * 2);
// });

// console.log("forEach", double);

// ***************Map, filter and reduce **********
//map is most widely used

// const array = [1, 2, 10, 16];
// const mapArray = array.map((num) => {
//   return num * 2;
// });
//console.log("map", mapArray);

//shorthand version of map array while only one param is there

// const array = [1, 2, 10, 16];
// const mapArray = array.map((num) => num * 2);
// console.log("map", mapArray);

// *****filter array*******
//Used for filtering an array easily.

// const array = [1, 2, 10, 16];

// const filterArray = array.filter((num) => num > 5);

// console.log(filterArray);

// *****Reduce array*****

// const array = [1, 2, 10, 16];

// const reduceArray = array.reduce((acccumulator, num) => {
//   console.log(acccumulator + num);
//   return acccumulator + num;
// }, 5);

// console.log("reduce", reduceArray);

// const array = [
//   {
//     username: "john",
//     team: "red",
//     score: 5,
//     items: ["ball", "book", "pen"],
//   },
//   {
//     username: "becky",
//     team: "blue",
//     score: 10,
//     items: ["tape", "backpack", "pen"],
//   },
//   {
//     username: "susy",
//     team: "red",
//     score: 55,
//     items: ["ball", "eraser", "pen"],
//   },
//   {
//     username: "tyson",
//     team: "green",
//     score: 1,
//     items: ["book", "pen"],
//   },
// ];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames

// const addedArray = [];
// const newArray = array.forEach((num) => {
//   addedArray.push(num.username + "!");
// });
// console.log(addedArray);

//Create an array using map that has all the usernames with a "? to each of the usernames

// const newArray = array.map((num) => {
//   return num.username + "?";
// });

// console.log(newArray);

//Filter the array to only include users who are on team: red

// const newArray = array.filter((num) => {
//   return num.team == "red";
// });

// console.log(newArray);

//Find out the total score of all users using reduce

// (1), what is the value of i? index
// (2), Make this map function pure:

// const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) => {
//   console.log(num, i);
//   alert(num);
//   return num * 2;
// });

//Find out the total score of all users using reduce

// const userTotal = array.reduce((acc, i) => {
//   return acc + i.score;
// }, 0);

// console.log(userTotal);

//***************Reference types*********//

// var object1 = { value: 10 };
// var object2 = object1;
// var object3 = { value: 10 };
// console.log(object1, object2, object3);

// ***********Pass by reference************
// var c = [1, 2, 3, 4, 5, 6];
// var d = c;

// d.push(12345);
// console.log(c);
// console.log(d);

// *****cloning with objects*****

// let obj = { a: "a", b: "b", c: "c", d: "d" };
// obj.c = 5; //updating a value
// console.log(obj);

// let obj = { a: "a", b: "b", c: "c", d: "d" };
// let clone = { ...obj }; //spread operator
// console.log(clone);

//pass by value and reference

// let obj = { a: "a", b: "b", c: { deep: "try and copy me" } };
// clone2 = { ...obj };
// let superClone = JSON.parse(JSON.stringify(obj)); //if we do this, it won't override.

// obj.c.deep = "hahaha";
// console.log(obj);
// console.log(clone2);
// console.log(superClone);

// ***************ES6****************

// const pets = ["cat", "dog", "bat"].includes("bird");
// console.log(pets); //True for false

// const square = (x) => x ** 2;
// console.log(square(4));

// const cube = (y) => y ** 3;
// console.log(cube(3));

// ***********ES7*********

// const dragons = ["Tim", "Johnathan", "Sandy", "Sarah"];

// const res = () => (dragons.includes("Sandy") ? dragons : "no such name");

// console.log(res());

// dragons.filter((name) => name.includes("Johnathan")); // ['Johnathan']

// let num = (x) => x ** 100;
// console.log(num(5));

// *************ES8****************

// - Object.values
// - Object.entries
// - Object.keys

// let obj = {
//   username0: "Santa",
//   username1: "Rudolf",
//   username3: "Mr.Grinch",
// };
// Object.keys(obj).forEach((key, index) => {
//   console.log(key, obj[key], index);
// });

// Object.values(obj).forEach((value) => {
//   console.log(value);
// });

// Object.entries(obj).forEach((value) => {
//   console.log(value);
// });

// Object.entries(obj).map((value) => {
//   return value[1] + value[0].replace("username", "");
// });

// const startLine = "     ||<- Start line";
// let turtle = "🐢";
// let rabbit = "🐇";

// // it should look like this:
// ("     ||<- Start line");
// ("       🐢");
// ("       🐇");

// // when you do:
// console.log(startLine);
// console.log(turtle);
// console.log(rabbit);

// turtle = turtle.padStart(8);
// rabbit = rabbit.padStart(8);

// console.log(turtle);
// console.log(rabbit);

// const func = (a, b, c, d, e) => {
//   console.log();
// };

// func(1, 2, 3, 4);

// ***************Object.keys,entries,keys***************

// let obj = {
//   username: "becky",
//   team: "blue",
//   score: 10,
//   items: "backpack",
// };

// // Object.values();
// // Object.entries();
// // Object.keys();

// console.log(Object.values(obj));

// //we could also do the following by looping through the array.

// Object.keys(obj).forEach((key, index) => {
//   console.log(key, obj[index]);
// });

// Object.entries(obj).forEach((value) => {
//   console.log(value);
// });

// Object.values(obj).forEach((value) => {
//   console.log(value);
// });

// #3) Get the below object to go from:
// let obj = {
//   my: "name",
//   is: "Rudolf",
//   the: "raindeer",
// };
// // to this:
// ("my name is Rudolf the raindeer");

// let string = "";
// Object.entries(obj).forEach((key) => {
//   string += key[0] + key[1];
// });
// console.log(string);

// ***************ES10***************

// const array = [1, [2], [3, 4, [5]]];
// console.log(array.flat(2)); //flat has default value of 1. If we want to dive deeper, we can use 2,3,4 based on the nested arrays created inside.

// const enteries = ["bob", "jack", , , , , , , , , "cindy"];

// console.log(enteries.flat());

// //********flatmap********* is used to flat the values and also add any extra addition to it.
// console.log(enteries.flatMap((extension) => extension + "!!"));

//*******trim*******//

// userEmail = "             anoop@anoop.com";
// userEmail2 = "abc@abc.com        ";

// console.log(userEmail.trimStart());
// console.log(userEmail2.trimEnd());

// *****fromEnteries******
//Used to convert an list of arrays into a objects

// let userProfiles = [
//   ["Anooop", 23],
//   ["Sairam", 26],
//   ["Suresh", 28],
// ];

// console.log(Object.fromEntries(userProfiles));

//*********try and catch***************//

//do something right in try and if there is a error go to catch.

// try {
//   bob + 4 + 5;
// } catch {
//   console.log("you messed up");
// }

// // #1 Turn this array into a new array: [1,2,3,[4],[5]]. Bonus if you can do it on one line
// // const array = [[1], [2], [3], [[[4]]], [[[5]]]];

// // console.log(array.flat(10));

// // #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
// const greeting = [
//   ["Hello", "young", "grasshopper!"],
//   ["you", "are"],
//   ["learning", "fast!"],
// ];

// console.log(greeting.flat());

// //#3 Turn the greeting array above into a string: 'Hello young grasshopper you are learning fast!'

// let string = greeting.flat().join(" ");
// console.log(string);

// // //instructor solution
// // console.log(greeting.flatMap((x) => x.join(" ")));

// //#4 Turn the trapped 3 number into: [3]
// const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];

// console.log(trapped.flat(Infinity));
// //#5 Clean up this email to have no whitespaces. Make the answer be in a single line (return a new string):
// const userEmail3 = "     cannotfillemailformcorrectly@gmail.com   ";

// console.log(userEmail3.trim());

// // //instructor solution
// console.log(userEmail3.trimEnd().trimStart());

// //#6 Turn the below users (value is their ID number) into an array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// const users = { user1: 18273, user2: 92833, user3: 90315 };

// console.log(Object.entries(users));

// //#7 change the output array of the above to have the user's IDs multiplied by 2 -- Should output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

// // newArray = Object.entries(users).map((n) => [n[0], n[1] * 2]);

// // console.log(newArray);

// updatedUsersArray = Object.entries(users).map((user) => [user[0], user[1] * 2]);

// console.log(updatedUsersArray);

// //#8 change the output array of question #7 back into an object with all the users IDs updated to their new version. Should output: { user1: 36546, user2: 185666, user3: 180630 }

// const updatedUsers = Object.fromEntries(updatedUsersArray);
// console.log(updatedUsers);

// // **********Advanced loops***********
// const basket = ["apples", "mangoes", "oranges"];

// //1
// for (let i = 0; i < basket.length; i++) {
//   console.log(basket[i]);
// }

// //2
// basket.forEach((item) => {
//   console.log(item);
// });

// //for of (new) ES6 syntax - you can iterate over both arrays and strings.

// for (item of basket) {
//   console.log(item);
// }

// for (i of "anoop") {
//   console.log(i);
// }

// //for in (new) Es6 syntax - works with objects

// const objBasket = {
//   apples: 4,
//   mangoes: 8,
//   oranges: 10,
// };

// for (item in objBasket) {
//   console.log(item);
// }

// ***********practice advanced loops********

// const biggestNumberInArray = (array) => {
//   let biggest = 0;
//   for (i of array) {
//     if (biggest < array[i]) {
//       biggest = array[i];
//     }
//   }
//   return biggest;
// };

// const array = [-1, 0, 3, 100, 99, 2, 99]; // should return 100
// const array2 = ["a", 3, 4, 2]; // should return 4
// const array3 = []; // should return 0

// a = biggestNumberInArray(array);
// console.log(a);

// function biggestNumberInArray2(arr) {
//   let biggest = 0;
//   arr.forEach((i) => {
//     if (biggest < array[i]) {
//       biggest = array[i];
//     }
//   });
//   return biggest;
// }

// b = biggestNumberInArray(array2);
// console.log(b);

// amazonBasket = {
//   glasses: 1,
//   books: 2,
//   floss: 100,
// };

// function checkBasket(basket, lookingFor) {
//   if (lookingFor in basket) {
//     return true;
//   } else {
//     return false;
//   }
// }

// a = checkBasket(amazonBasket, "sada");
// console.log(a);

//******************ES 2022*****************//

// const arr = [100, 200, 300, 400, 500];

// //previously we used to do

// a = arr[arr.length - 2]; //to get second last element

// //new syntax
// a = arr.at(-2);
// console.log(a);

//

//*******************************How javascript works*******************************
//Javascript has a V8 engine and is a single threaded language, single threaded means it has only one call stack which is First In Last Out. One one statement is executed at a time.

//**It has a memory heap and the call stack**//
//Ex -01
// const a = 5;
// const b = 6;
// const c = 7;

// console.log(a);
// console.log(b);
// console.log(c);

//Ex - 02

// const one = () => {
//   const two = () => {
//     console.log("4");
//   };
//   two();
// };

// one();

//the call stack would like the following:
//console.log(4);
//two()
//one()

//Javascript is a single threaded language that is non-blocking. Ideally, we don't wait for things that take time. Hence, ASYNCHRONOUS is to help.

//Let's say you have a set of friends in a buffet, and one guy is delaying and asks you to wait. We can use async there. Another example would be where you have a series of tasks to run and let's say second task is taking time, then async can be used.

//Imagine if you want to load your tweets synchronously, it might rake forever. Async helps you set a time and you can call it. So, javascript is aysnchronous when you can leave it a message.

//Async - setTimeout()

// console.log(1);
// setTimeout(() => {
//   console.log(2);
// }, 2000);
// console.log(3);

//output is:
//1
//3
//....wait for 2 seconds
//2

//We need JavaScript Run-Time Environment.
//It is part of the browser that has WEB API, CALLBACK QUEUE and EVENT LOOP.

//Web APIs - DOM(document), AJAX(XMLHttpRequest), Timeout(setTimeout)
//Callback queue - onClick, onLoad, onDone
//Event loop - checks the callback queue again and again and puts it to call stack.

//process -
//1. call stack
//2.web api
//3.callback queue
//4.event loop

//callback functions - calling functions of web apis from the callback queue and then the event loop to bring it back to the call stack.

//webpacks - bundles modules - javascript files into a single file. We can use ES6.

const array = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];

const filterArray = array.sort();

const subArray = [];

for (let i in filterArray) {
  if (i) {
  }
}

const nn = {};
