

(function () {
  console.log('hello');
})();

// immediately invoked function execution

var page = (function page() {
  console.log(this);
  var myArr = [];
  this.alien = "lilo";
  function addToArr (item) {

    myArr.push(item);
  }

  function getArr () {
    console.log("this in getArr", this);
    return myArr;
  }

  function _deleteItem (idx) {
    myArr.splice(idx, 1);
    console.log('private');
  }

  function publicDelete(idx) {
    deleteItem(idx);
  }

  return {
    add: addToArr,
    get: getArr,
    alien: this.alien
    // del: publicDelete
  }

})();


//
// var iceT = "yo yo yo";
// rapper();
// function rapper() {
//   var iceT = "A child was born in the east one day";
//     (function() {
//       var snoop = "rhyme pays";
//     })();
//
// }
// console.log(iceT);
