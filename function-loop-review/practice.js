var people = [
  {
    name: "Patrick",
    age: 24,
    hobby: ["javascript"],
    interests: "javascript"
  },
  {
    name: "Weesie",
    age: 23,
    hobby: ["javascript", "css"],
    interests: "movies"
  },
  {
    name: "Hank",
    age: 27,
    hobby: ["pottery"],
    interests: "football"
  },
  {
    name: "Bailey",
    age: 25,
    hobby: ["beach", "surfing"],
    interests: "surfing"
  }
];

// first obj
var patrick = people[0];

var html = "";

people.forEach(function(el) {
  //  console.log(el.name + " age: " + el.age);
  html += "<h1>" + el.name + " age: " + el.age + "</h1>";
  html += "<ul>";
   el.hobby.forEach(function(item) {
     html += "<li class='something'>" + item + "</li>";
   });
  html += "</ul>";
});
console.log(html);
// document.getElementsByTagName('body')[0].innerHTML = html;

var redditPicsArr = redditPictures.data.children;

// for(var i=0; i < redditPicsArr.length; i++) {
//
// }
var picHTML = "";
redditPicsArr.forEach(function(el, idx, arr) {
  picHTML += "<h2>" + el.data.title + "</h2>";
  picHTML += "<img src='" + el.data.thumbnail + "'>";
});

// document.getElementById("pictures").innerHTML = picHTML;

// using .filter();

var filteredData = redditPicsArr.filter(function(el) {
  return el.data.thumbnail !== "self";
});

var popPics = filteredData.filter(function (el) {
  return el.data.score > 70;
});


// using .map()
var numArr = [1,2,3,4];
numArr.map(function(el) {
  return el + 2;
});
// [3, 4, 5, 6]

var normalizedPicsArr = popPics.map(function (element) {
    return {
            thumbnail: element.data.thumbnail,
            title: element.data.title,
            score: element.data.score
           };
});
var newPicsStr = "";
normalizedPicsArr.forEach(function(el, idx, arr) {
  newPicsStr += "<h2>" + el.title + " Score: " + el.score +"</h2>";
  newPicsStr += "<img src='" + el.thumbnail + "'>";
});
 document.getElementById("pictures").innerHTML = newPicsStr;





// 0. write your own forEach() that takes two arguments: an array, and a callback

function forEach(array, callback){

      for(var i = 0; i < array.length; i++) {
        callback(array[i], i, array);
      }

}
forEach(['flower', 'tree', 'turtle'], function (item) {
  console.log(item + " is pretty");
})
