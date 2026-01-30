// Import the built-in http module
const http = require('http');

// Define host and port
const host = 'localhost';
const port = 8000;

// Create a request listener function to handle all requests
const requestListener = function (req, res) {
  res.setHeader("Content-Type", "text/plain");
  res.writeHead(200); // Set the status code to 200 (OK)
  res.end("Hello, World!"); // Send the response body and close the connection
};

// Create the server with the request listener
const server = http.createServer(requestListener);

// Start the server and make it listen for connections
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
