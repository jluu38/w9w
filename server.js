const { static } = require('express');
const express = require('express');
const app = express();
const path = require("path");
const fs = require("fs");

let dataLog = function datalog(request, response, next) {
  let dateTime = new Date();
  let formattedDate =
  dateTime.getFullYear() +
  "-" +
  (dateTime.getMonth() + 1) +
  "-" +
  dateTime.getDate() +
  " " +
  dateTime.getHours() +
  ":" +
  dateTime.getMinutes() +
  ":" +
  dateTime.getSeconds();
  let method = request.method;
  let url = request.url;
  // let status = response.status();
  let log = `${formattedDate} ${method}:${url}`;
  console.log(log);
  fs.appendFile("request_logs.txt", log + "\n", err => {
    if (err) {
      console.log(err);
    }
  });
  next(); 
};

app.use(dataLog);

// simple approach; not the most robust
// app.use(express.static("./public"));

// preferred approach
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function(request, response){
  // console.log(request);
  response.send(`Hello world!`)
});

app.get("/about", (request, response) => {
  response.send("This is the About page");
});

app.use(function(request, response){
  response.status(404);
  response.send(`Custom 404: not found`);
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  console.log(`listening on port: ${PORT}`);
})

// from W9T
// app.get('/', function (req, res) {
//   res.send('Hello World');
// });

// app.listen(8080);