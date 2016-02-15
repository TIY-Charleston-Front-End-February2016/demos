var bodyContent = document.getElementById('content');
var bodyUl = document.createElement('ul');
bodyContent.appendChild(bodyUl);

redditObj.data.children.forEach(function(item,idx,arr) {
  var appendToPage = document.createElement('li');
  var scoreSpan = document.createElement('span');
  scoreSpan.innerText = item.data.score
  appendToPage.innerText = item.data.title;
  appendToPage.appendChild(scoreSpan);
  bodyUl.appendChild(appendToPage);
});
