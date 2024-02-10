// app.js

// Import the built-in HTTP module
const http = require('http');

// Define the hostname and port
const hostname = '0.0.0.0';
const port = 3000;

// Create a HTTP server
const server = http.createServer((req, res) => {
  // Set the HTTP status code and content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  // Send the response body ("Hello, World!")
  res.end('Hello, World!\n');
});

// Start the server and listen on the specified port and hostname
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
