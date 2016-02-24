var bioStr = $('#bios').html();
var bioTmpl = _.template(bioStr);
var bioData = {name: "Mike", bio: "likes java, not javascript"};
console.log(bioTmpl(bioData));


var concatTmpl = "";

people.forEach(function (el) {
 concatTmpl += "<h2>" + el.name + "</h2><p>BIO:" + el.bio +"</p>";
});
console.log(concatTmpl);

var russStr = "";

var russObj = {name: "russ", bio: "likes fishing"};
russStr += "<h2>" + russObj.name + "</h2><p>BIO:" + russObj.bio +"</p>";

people.forEach(function (el) {
 console.log(bioTmpl(el));
});


bioTmpl({name: "russ", bio: "likes fish"});
