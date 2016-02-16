'use strict';

/*
 * Random Student Generator
 */
// randoStudent(studentList);
// // otherRandoStud(studentList);
//
// function randoStudent(studentList) {
//   return studentList[Math.floor(Math.random() * (studentList.length))];
// }
//
// var studentList = ['weezy','eric','brandon','russ','candance','justin','andrew','alex','bailey','mike','kathleen','patrick','hank','Dina','elizabeth','frank'];
//
// var otherRandoStud = function(studentList) {
//   return studentList[Math.floor(Math.random() * (studentList.length))];
// }

// var helpme = "something";
// sayHello("JIMMY");
//
// function sayHello(name) {
//   console.log("HELLO, ", name);
//   // console.log('jimmhelp, shay it: ', helpme);
//
//
//   function deeperLevel() {
//     'use strict';
//     helpme = "jimmyHelpMe";
//   }
//   deeperLevel();
//   console.log("THIS IS JIMMY HELP ME", helpme);
// };
//
// console.log("help", helpme);
//
// // helpme = 'this shouldnt be here';
//
// var sayHelloStatement = function(name) {
//   console.log("I ALSO GREET THEE, ", name);
// }
//
// sayHelloStatement("brian");
var sumFunc = function() {
  var sum = 0;
  var args = [].slice.call(arguments);
  for(var i = 0; i < args.length; i++) {
    sum = sum + args[i];
  }
  console.log(sum);
  return sum;
}

// sumFunc(4,3,3,4);
// sumFunc(15,23,52,3,2,234,1,52);

var sumForEach = function() {
  var sum = 0;
  var args = [].slice.call(arguments);
  function sumList(item) {
    sum += item;
  }
  args.forEach(sumList);
  return sum;
}
// var sum = 0;
function sumList(item) {
  sum += item;
}

console.log(sumForEach(1,2,3,4,5));
console.log(sumForEach(1,2,3,4,5,6,7));
