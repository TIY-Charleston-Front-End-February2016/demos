// alert('Hello World')
console.log('This is coming from salesperson.js');


// lakdjfkla

/*  This
is
a
multi
line
*/

// var confirmation = confirm('Do you want me to continue?');
var myObj = {name: "nathan", age: 28};
var answer = prompt("Do you want the 1) blue pleated pants, or 2) the magenta cashmere sweater?");
if(answer === '1' && answer === "blue pleated pants") {
  console.log("Great Choice!")
  answer = prompt("Can I interest you in some yellow orangatun shoes?");
  if(answer === "yes") {
    console.log("THats amazing");
    var answer = prompt('Can I interest you in anything else');
    if(answer === 'yes') {

    } else {
      neverEscape();
    }
  } else {
    neverEscape();
  }
} else if(answer === '2') {
  console.log("Uhhh those aren't expensive enough");
  prompt("Will you buy a loofha?");
  neverEscape();
} else {
  console.log("Those are your only options");
  neverEscape();
}

function neverEscape() {
  while(answer !=='yes') {
    answer = prompt("YOU CAN NEVER LEAVE");
  }
  return;
}
