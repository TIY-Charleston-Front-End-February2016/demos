function Organism() {
  this.cells = true;
  this.name = "Final Name";
}

function Animal(options) {
  var options = options || {};
  this.feet = options.feet || true;
  this.cute = options.cute || true;
  this.name = 'giraffe';
}

function Cat(catOpts) {
  var catOpts = catOpts || {};
  this.legs = 4
  this.name = catOpts.name || 'buffy';
  this.climbTree = function() {
    console.log(`${this.name} climbed to grab a squirrel`);
  }
}

Animal.prototype = new Organism;
Cat.prototype = new Animal;
Animal.prototype.eat = function() {
  console.log(`${this.name} ate sum yum food`);
}
Cat.prototype


var a = performance.now();
_.times(10000000,function() {
  var cat = new Cat();
})
var b = performance.now();
console.log(`THIS ALL TOOK ${b - a} seconds`);



function Dog(dogOpts){
  var options = dogOpts || {};
}

function Human() {
  this.legs = 2;
}

//
// function Person(options) {
//   var that = this;
//   var _this = this;
//
//   var options = options || {};
//   this.name = options.name || 'pat';
//   // console.log("This Inside Person: ", this);
//   this.sayHello = function(person) {
//     return "Hello, " + person.name;
//   }
//   this.greet = {
//     hello: function() {
//       console.log("WHAT IS THIS?", this);
//       console.log("Hello, " + that.name);
//     },
//     hola: function() {
//       console.log("Hola, " + this.name);
//     },
//     nihao: function() {
//       console.log("Ni hao, "+ _this.name);
//     },
//   }
// }
//
// var pat = new Person();
// var jimOptions = {name: "Jim"};
// var jim = new Person(jimOptions);
