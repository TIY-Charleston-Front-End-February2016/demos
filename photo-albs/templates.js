var albumTemplates = {};

albumTemplates.photo = [
  "<article>",

    "<img src='<%= photo %>' >",

  "</article>"
].join("");

albumTemplates.album = [
  "<article rel='<%= albumName %>'>",
    "<h3><%= albumName %></h3>",
    "<img src='<%= photos[0] %>' >",
    "<p><%= desc %></p>",
  "</article>"
].join("");
