const express = require('express');
const app = express();

// static tells server where to look for our static files (HTML, CSS, JS, images)
app.use(express.static(__dirname + "/public"));

app.get('/contactlist',function(req, res){
  console.log("I received a GET request.");
});

app.listen(3000);
console.log("Server is running on port 3000");
