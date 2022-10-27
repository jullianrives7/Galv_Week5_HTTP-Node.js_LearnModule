"use strict";

const http = require("http");
const port = process.env.PORT || 8000;

const server = http.createServer(function (req, res) {
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello world");
});

server.listen(port, function () {
  console.log("Listening on port", port);
});

// brew installed
// https://brew.sh/
// after brew installed, reopened VS Code

//updated brew and installed httpie
//$ brew update
//$ brew install httpie

//run "node helloServer.js" in one terminal
//open a new terminal and run  "http GET localhost:8000/" to send an HTTP request to the server (helloServer.js)

// Sending HTTP Requests with cURL
// $ curl -v localhost:8000

// Sending HTTP Requests with Postman
// Open Postman (Install it if you haven't already  ) and enter http://localhost:8000 as the URL
// Make sure the request type is "GET"
// Click Send

// Sending HTTP Requests with a Browser
// The simplest and most familiar way to send an HTTP request is to use what you're used to creating them with, which is your browser.
// Visiting localhost:8000  in Google Chrome or a browser of your choice will send a request to the URL you put in the URL bar.

// An HTTP request is composed of the following parts:

// A method (or verb)
// A path
// An HTTP version
// Key-value headers
// And an optional body
// Here's an example of what an HTTP request looks like.

// GET / HTTP/1.1
// Accept: */*
// Accept-Encoding: gzip, deflate
// Connection: keep-alive
// Host: localhost:8000
// User-Agent: HTTPie/0.9.3

// Method	Description
// GET	Used retrieve a resource, like an HTML file, from a server.
// POST	Used send information, like user input, to a server.

// You'll learn about additional HTTP methods, like PUT, PATCH, and DELETE, when we encounter RESTful HTTP servers later in the course.

// An HTTP response is composed of the following parts.

// An HTTP version
// A status code
// Key-value headers
// And an optional body
// Here's an example of what an HTTP response looks like.

// HTTP/1.1 200 OK
// Connection: keep-alive
// Content-Length: 11
// Content-Type: text/plain
// Date: Mon, 13 Jun 2016 04:28:36 GMT
// Hello world

// While an HTTP response can only contain one status code, there are many different codes that a server can choose from.
// Each status code explains to the client how the server interpreted the request. Status codes are three-digit numbers that
// are grouped into the following categories.

// Status Code Group	Description
// 1XX	Request accepted, ready for the next one.
// 2XX	Request accepted, the server's work is complete.
// 3XX	Request accepted, but additional client work is needed.
// 4XX	Request accepted, but there was an error on the client.
// 5XX	Request accepted, but there was an error on the server.

// Status code examples CATS: https://http.cat/
// Status code examples DOGS: https://httpstatusdogs.com/
// Wikipedia status codes list: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
