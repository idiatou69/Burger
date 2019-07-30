
var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;
//server static content for the app from public directory in the application directory.
app.use(express.static("public"));
//aprse application body as json
app.use(express.urlencoded({ extended:true}));
app.use(express.json());
//set handlebars.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

//import routes give the server access to them.
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

//star our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // log (server-side) when our server has started
    console.log("App listening on PORT: " + PORT);
  });
  