var newSum = items.reduce(function(accumulator,element,index,array) {
  return accumulator += element.price
},0) / items.length

// var sum = 0;
// items.forEach(function(banjo){
//   sum += banjo.price
// })

document.getElementById('answer1').innerText = newSum.toFixed(2);


/*
 * 2). 14 and 18
 */

var filteredItems = items.filter(function(element) {
  return element.price >= 14 && element.price <= 18;
})

var answer2Str = "<ul>";
filteredItems.forEach(function(filterThing) {
  answer2Str += "<li>" + filterThing.title + "</li>";
});

document.getElementById('answer2').innerHTML = answer2Str.concat('</ul>');


/*
 * 3) GBP
 */

 var currencyCode = items.filter(function(el) {
   return el.currency_code === "GBP";
 })

document.getElementById('answer3').innerText = currencyCode[0].title;

/*
 * 4) Wood
 */

var woods = items.filter(function(allObjs) {
  return allObjs.materials.includes('wood');
}).map(function(justWoods) {
  return justWoods.title;
});
var newStr = "<ul>"
woods.forEach(function(woodTitle) {
  newStr += "<li>" + woodTitle + "</li>";
});

document.getElementById('answer4').innerHTML = newStr.concat("</ul>");


var gThanStr = ""
var gThan = items.filter(function(el) {
  return el.materials.length >= 8;
}).map(function(el) {
  return {
    lotsOfMats: el.title
  }
}).forEach(function(el) {
  gThanStr += "<p>" + el.lotsOfMats + "</p>";
})

document.getElementById('answer5').innerHTML = gThanStr;


var giantList = "";
items.filter(function(el) {
  return el.who_made === 'i_did';
}).forEach(function(el){
  giantList += "<p>" + el.title + "</p>";
});

document.getElementById('answer6').innerHTML = giantList;
