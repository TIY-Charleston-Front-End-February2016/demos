var templates = {};

templates.blogPost = [
  '<ul data-id="<%= idx %>">',
    '<li><h3> Title: <%= title %></h3></li>',
    '<li><p contentEditable="false"><%= body %></p></li>',
    '<li><h6> <%= author %></h6></li>',
    '<button type="button" name="Edit" class="edit-post">Edit</button>',
    '<button type="button" name="Delete" class="delete-post">Delete</button>',
  '</ul>'
].join("");

templates.authors = [
  "<ul>",
    "<li><h3> <%= name %> </h3> </li>",
    "<li><p> About the Author: <%= about %> </p></li>",
    "<li><img src='<%= face %>' /> </li>",
  "</ul>"
].join("")
