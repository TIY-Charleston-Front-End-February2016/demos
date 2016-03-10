function Character(options) {
  var options = options || {};
  this.health = options.health || 100;
  this.name = options.name || "Samus";
  this.power = options.power || 10;
  this.misses = 0;
  this.attack = function (enemy) {
    enemy.damage(this);
  };
  this.damage = function (enemy) {
    var random = Math.floor(Math.random() * 10 + 1);
    if(random >4) {
      if(this.health < 1) {
        console.log("Sorry, "+ this.name +" is dead.");
      }
      if(enemy.weapon) {
        this.health = this.health - (enemy.power * enemy.weapon.strength);
        console.log('bam bam, you just got beat by a ' + enemy.weapon.name);
      } else {
        this.health = this.health - enemy.power;
      }
  } else {
    enemy.misses = enemy.misses + 1;
    console.log("you missed, try again!");
  }

  };
  this.equip = function (name, strength) {
    this.weapon = new Weapon({name: name, strength: strength});
  }
}

function Weapon(options) {
  var options = options || {};
  this.name = options.name || "Pea Shooter";
  this.strength = options.strength || "1";
}


var candace = new Character({health: 1000, name: "Candace"});

var justin = new Character({health: 999, name: "Justin", power: 100});



// constructors is how classes are made in js.
function Person(options) {
  var options = options || {};
  this.name = options.name || "Minion";
  this.power = options.power || 10;
  this.greet = function (otherperson) {
    console.log(this.name + " says hello to " + otherperson);
  }
}
var weesieOpts = {
  name: "Weesie",
  power: 1000
};
var andrewOpts = {
  name: "Andrew",
  power: 1000
};
var weesie = new Person(weesieOpts);
var andrew = new Person(andrewOpts);
var eric = new Person({power: 100});
var calvin = new Person();
