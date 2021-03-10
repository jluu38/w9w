const { static } = require('express');
const express = require('express');
const app = express();
const path = require("path");

// simple approach; not the most robust
// app.use(express.static("./public"));

// preferred approach
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function(request, response){
  // console.log(request);
  response.send(`Hello world!`)
});

app.use(function(request, response){
  response.status(404);
  response.send(`Custom 404: not found`);
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`listening on port: ${PORT}`);
})

// from W9T
// app.get('/', function (req, res) {
//   res.send('Hello World');
// });

// app.listen(8080);