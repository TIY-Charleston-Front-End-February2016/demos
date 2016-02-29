$(document).ready(function() {
  cutimal.init();
})

var cutimal = {
  url: 'http://www.reddit.com/r/aww.json',
  init: function() {
    cutimal.styling();
    cutimal.events();
  },
  styling: function() {
    cutimal.getRedditData();
  },
  events: function() {
    $('input[type="submit"]').on('click', function(event) {
      event.preventDefault();
      var suggestion = $('input[type="text"]').val();
      $('input[type="text"]').val("");
      cutimal.getRedditData(suggestion);
    })
  },
  buildTemplate: function(templateStr,data) {
    return _.template(templates[templateStr]);
  },
  properData: function(arrData) {
    return arrData.map(function(el) {

      // if(el.data.url.lastIndexOf('v') === el.data.url[el.data.url.length - 1])
      //   var actualUrl = el.data.url.slice(0,-1);
      // }  else {
      //   var actualUrl = el.data.url
      //   }
      return {
        imgUrl: el.data.thumbnail,
        title: el.data.title,
        score: el.data.score
      }
    });
  },
  getRedditData: function(subreddit) {
    if(subreddit) {
      cutimal.url = "http://www.reddit.com/r/" + subreddit + ".json"
    }
    $.ajax({
      method: 'GET',
      url: cutimal.url,
      success: function(fluffy) {
        window.fluff = fluffy;
        var sanitizedData = cutimal.properData(fluffy.data.children)
        cutimal.addPostsToDOM('cuteanimal',sanitizedData,$('section.primary-container'));
      }
    });
  },
  addPostsToDOM: function(templateStr, data, $target) {
    $target.html('');
    var myTmpl = cutimal.buildTemplate(templateStr);
    var htmlStr = "";
    data.forEach(function(el) {
      htmlStr += myTmpl(el);
    })
    $target.html(htmlStr);
  }
};
