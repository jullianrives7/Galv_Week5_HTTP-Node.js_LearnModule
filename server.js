// var fs = require("fs"); // add this to the top of your js file
// var routes = require("./routes.js");
// var index = require("./index.js");

// "use strict";

// var http = require("http");
// var port = process.env.PORT || 8000;

// var server = http.createServer(function (req, res) {
//   var guests = ["Mary", "Don"];
//   var guestsJSON = JSON.stringify(guests);

//   res.setHeader("Content-Type", "application/json");
//   res.end(guestsJSON);
// });

// server.listen(port, function () {
//   console.log("Listening on port", port);
// });

// Let's break down the server- how we set it up, and how it's configured:

// We require the http module, which is included as part of Node's standard library.
// We decide on a port to attach our server to. We're using process.env.PORT. process.env is an object that can read from all of the environment variables in our shell.
// We're creating an instance of a server, using the createServer method of http. This makes a new instance of the class Server. We're passing in a function that will get called later.
// We're telling our server to listen for any incoming HTTP Requests on the port we configured earlier. Anytime the server gets a request on that port, the function we defined on line 4 will run. Once the server attaches successfully to the port, it will run the callback function, letting you know the server has been set up properly. The server can fail to attach to the port if the port is already in use. Similar to how you can't dock two boats in the same port, you can't attach two servers to the same port!
// Next, let's break down the request handler:

// First, take a look at the callback function - it takes two arguments - req and res. These stand for request and response, respectively. You'll see them used throughout course materials, documentation, and stack overflow answers interchangeably. The callback's first req argument will contain the incoming HTTP request as an http.IncomingMessage object. The callback's second res argument will contain an empty outgoing HTTP response as an http.ServerResponse object. The goal of the callback is to correctly fill in the res object based on the information in req object.

// We're just creating an ordinary array here, nothing special
// We're just turning the array into a string. The only thing we can really send via HTTP is a string, so we have to turn all of our data into strings before we send it.
// We're configuring the information we need to send back to whoever sent us a request. Really, all we're doing is building up the string of text that you saw in the "What is an HTTP Response?" section. Using the setHeader method adds a key (the name of the header) and value to the response we'll be sending out.
// The end method is our server's way of saying "ship it!" - it sends the response, and tells the client "there won't be more stuff coming after this".

// See the Node.js API documentation to learn what properties and methods are available for each object type.
// http.IncomingMessage object : https://nodejs.org/dist/latest-v6.x/docs/api/http.html#http_class_http_incomingmessage
// http.ServerResponse object : https://nodejs.org/dist/latest-v6.x/docs/api/http.html#http_class_http_serverresponse

//in one terminal, run the server: "node server.js"
//in another terminal, send the following HTTP request to the server: "http GET localhost:8000/"

// Right now, your HTTP server handles every HTTP request the same way, regardless of the request's method or path.
// It would be much more useful if your HTTP server could send back different HTTP responses based on the information inside the HTTP requests.

// Let's fix that by refactoring the server.js file with the following code.
// ("use strict");

// var http = require("http");
// var port = process.env.PORT || 8000;

// var server = http.createServer(function (req, res) {
//   if (req.method === "GET" && req.url === "/guests") {
//     var guests = ["Mary", "Don"];
//     var guestsJSON = JSON.stringify(guests);

//     res.setHeader("Content-Type", "application/json");
//     res.end(guestsJSON);
//   } else {
//     res.statusCode = 404;
//     res.setHeader("Content-Type", "text/plain");
//     res.end("Not found");
//   }
// });

// server.listen(port, function () {
//   console.log("Listening on port", port);
// });

// Now, save the server.js file, terminate the existing server with Ctrl + C, and run it again with the node command.
// "node server.js"

// In a separate Terminal tab, send the following HTTP request to the server.
// $ http GET localhost:8000/guests

//
//
//
// Create an HTTP Server in the area below. Pretend you are working in a javascript file.

// Your server should meet the following specifications:

// The HTTP Server should handle an HTTP GET Method Request, where the URL is "/cats"
// When someone visits "localhost:8000/cats", they should get a response back that says "meow"
// Refer to the example above if you need to.
// "use strict";

// var http = require("http");
// var port = process.env.PORT || 8000;

// var server = http.createServer(function (req, res) {
//   if (req.method === "GET" && req.url === "/cats") {
//     var meow = "meow";
//     var catsJSON = JSON.stringify(meow);

//     res.setHeader("Content-Type", "application/json");
//     res.end(catsJSON);
//   } else {
//     res.statusCode = 404;
//     res.setHeader("Content-Type", "text/plain");
//     res.end("Not found");
//   }
// });

// server.listen(port, function () {
//   console.log("Listening on port", port);
// });

// Manually restarting a Node.js HTTP server gets old fast. Plus, it's easy to forget to do it every time you refactor your code.
// To speed up your development workflow, let's use a command-line utility, called Nodemon  , that'll run your server with Node.js
// and automatically restart it when the code changes.

// To get started, use use NPM to install the nodemon package globally.

// $ npm install -g nodemon

// Terminate the existing server with Ctrl + C, but this time run it with the nodemon command.

// $ nodemon server.js

// Send the following HTTP request to the server to verify everything works the same.

// $ http GET localhost:8000/guests
// Right now, your HTTP server sends a hardcoded guest list in the HTTP response.
// It would be much more useful if your HTTP server could send guest list that's read from the JSON-formatted guests.json file.

// Let's fix that by refactoring the server.js file with the following code.
// "use strict";

// var fs = require("fs");
// var path = require("path");
// var guestsPath = path.join(__dirname, "guests.json");

// var http = require("http");
// var port = process.env.PORT || 8000;

// var server = http.createServer(function (req, res) {
//   if (req.method === "GET" && req.url === "/guests") {
//     fs.readFile(guestsPath, "utf8", function (err, guestsJSON) {
//       if (err) {
//         console.error(err.stack);
//         res.statusCode = 500;
//         res.setHeader("Content-Type", "text/plain");
//         return res.end("Internal Server Error");
//       }

//       res.setHeader("Content-Type", "application/json");
//       res.end(guestsJSON);
//     });
//   } else {
//     res.statusCode = 404;
//     res.setHeader("Content-Type", "text/plain");
//     res.end("Not found");
//   }
// });

// server.listen(port, function () {
//   console.log("Listening on port", port);
// });

// Now, save the server.js file and add the following data to the guests.json file.

// $ echo '["Mary", "Don"]' > guests.json

// Send the following HTTP request to the server.

// $ http GET localhost:8000/guests

// Right now, your HTTP server can only send back all the records from the database.
// It would be much more useful if your HTTP server could send back individual records as well.

// Let's fix that by refactoring the server.js file with the following code.
("use strict");

var fs = require("fs");
var path = require("path");
var guestsPath = path.join(__dirname, "guests.json");

var http = require("http");
var port = process.env.PORT || 8000;

var server = http.createServer(function (req, res) {
  if (req.method === "GET" && req.url === "/guests") {
    fs.readFile(guestsPath, "utf8", function (err, guestsJSON) {
      if (err) {
        console.error(err.stack);
        res.statusCode = 500;
        res.setHeader("Content-Type", "text/plain");
        return res.end("Internal Server Error");
      }

      res.setHeader("Content-Type", "application/json");
      res.end(guestsJSON);
    });
  } else if (req.method === "GET" && req.url === "/guests/0") {
    fs.readFile(guestsPath, "utf8", function (err, guestsJSON) {
      if (err) {
        console.error(err.stack);
        res.statusCode = 500;
        res.setHeader("Content-Type", "text/plain");
        return res.end("Internal Server Error");
      }

      var guests = JSON.parse(guestsJSON);
      var guestJSON = JSON.stringify(guests[0]);

      res.setHeader("Content-Type", "application/json");
      res.end(guestJSON);
    });
  } else if (req.method === "GET" && req.url === "/guests/1") {
    fs.readFile(guestsPath, "utf8", function (err, guestsJSON) {
      if (err) {
        console.error(err.stack);
        res.statusCode = 500;
        res.setHeader("Content-Type", "text/plain");
        return res.end("Internal Server Error");
      }

      var guests = JSON.parse(guestsJSON);
      var guestJSON = JSON.stringify(guests[1]);

      res.setHeader("Content-Type", "application/json");
      res.end(guestJSON);
    });
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("Not found");
  }
});

server.listen(port, function () {
  console.log("Listening on port", port);
});

// Now, save the server.js file and send the following HTTP request to the server.
// $ http GET localhost:8000/guests

// Now, send the following HTTP request to the server.
// $ http GET localhost:8000/guests/0

// Finally, send the following HTTP request to the server.
// $ http GET localhost:8000/guests/1

// Extending Routes
// Using an if statement works for our two routes, but it doesn't scale well if we have many routes.
// Instead, we can create a file named routes.js and use an object to define routes in a more scalable way.
// see routes.js and index.js

// If we submit a request to either localhost:8000/special-message
// or localhost:8000/non-special-message, we still receive our intended response.
