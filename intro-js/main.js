// datatypes

// primitives
// numbers
// strings
// booleans
// use the typeof
typeof "this is cool";
// "string";
typeof [];
// "object";
typeof {};
// "object";
typeof function() {}
// "function";


// 2 main types of datatypes
// primitives
// - strings - "hello world's", 'hello world'
// - numbers - 1, 2, 2.1
// - booleans - true or false
// - null - var myVariable = null;
// - undefined

// objects
// - arrays
// - objects
// - functions


// var dogName = "Woody";
//
// if(dogName === "Woody") {
//   // do something
// }
// if(!!dogName === true) {
//   // do something
// }

// if(!dogName) {
//   dogName = "Snips";
// }
//
// var question = prompt("What is your name?").trim().toLowerCase();
//
// if (question === "calvin") {
//   console.log("your talking to yourself");
// }


// arrays
var myArr = [];
// .join()
// .push(), pop(), shift(), unshift()

[{prop1: "hello"}, 1, function test() {}]



// objects
var myObject = {};

myObject.propertyTwo = function test() {};
myObject.propertyThree = [1,2,"three"];
myObject.propertyFour = {obj: "test"};



// functions
//
// function sayMyName(humanName) {
//   console.log(humanName);
//   return humanName;
//   // body of function
// }
// var getName = prompt("what is your name?");
// sayMyName(getName);

//
// function greetHuman(humanName) {
//   console.log("greetHuman is working");
//   console.log("hello, " + humanName);
//   return "Hello, " + humanName;
// }
//
// var getName = prompt("what is your name?");
// alert(greetHuman(getName));

function wordCount(words) {
  // do stuff
  if(typeof words === "string") {
    var wordCt = words.split(" ").length + " words";
    console.log(wordCt);
    return wordCt;
  } else {
    console.log("Sorry, you must give me a string");
  }

}
wordCount("hello, how are you?")
// 4 words




function sum (x, y) {
  return x + y;
  alert("Justin Lock? You mean, Justin Rock!!!");
}
function divide(x, y) {
  return x/y;
}

sum(2,2222);

var newArr = [2,3, function coo() {return "baaa, baaa";}];
var newObj = {
  fName: "Calvin",
  lName: "Webster",
  fullName: function () {
    return newObj.fName + " " + newObj.lName;
  }
}

var calcTaxes = function () {
  return "you owe nothing in taxes!";
};

// function calcTaxes() {
//     return "you owe nothing in taxes!";
// }

calcTaxes();
