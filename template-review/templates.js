var appTemplates = {};

appTemplates.bios = [
  "<h2><%= name %></h2>",
  "<p>BIO: <%= bio %></p>",
  "<% if(age > 35) { %>",
  "<span>YOU ARE OLD!!! age: <%= age %> </span>",
  "<% } else { %>",
  "<span>YOU ARE A SPRING CHICKEN!!! age: <%= age %> </span>",
  "<% } %>"
].join("");

appTemplates.newTmpl = [
  "<nav>",
    "<ul>",
      "<li><a href=''>menu item</a></li>",
      "<li><a href=''>menu item</a></li>",
      "<li><a href=''>menu item</a></li>",
    "</ul>",
  "</nav>"
].join("");
