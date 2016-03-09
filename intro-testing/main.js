
// immediately invoked function execution

var page = (function () {

  var myArr = [];

  function addToArr (item) {

    myArr.push(item);
  }

  function getArr () {
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
