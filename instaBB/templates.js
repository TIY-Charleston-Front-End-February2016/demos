module.exports = {
  photo: [
  '  <div class="mdl-card mdl-shadow--2dp">',
    '<img src="<%= photoUrl %>">',
  '<div class="mdl-card__actions mdl-card--border">',
    '<a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">',
        '<%= title %>',
    '</a>',
  '</div>',
'</div>'
  ].join("")
}
