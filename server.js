const express = require('express');
const app = express();
const mongojs = require('mongojs');

// tells  you what database and collections will be used here
const db = mongojs('contactlist', ['contactlist']);

// static tells server where to look for our static files (HTML, CSS, JS, images)
app.use(express.static(__dirname + "/public"));

app.get('/contactlist',function(req, res){
  console.log("I received a GET request.");
  person1 = {
    name: 'Tim',
    email: 'tim@email.com',
    number: '(111) 111-1111'
  };
  person2 = {
    name: 'Jane',
    email: 'jane@email.com',
    number: '(222) 222-2222'
  };
  person3 = {
    name: 'John',
    email: 'john@email.com',
    number: '(333) 333-3333'
  };
  let contactlist = [person1, person2, person3];
  res.json(contactlist);
});

app.listen(3000);
console.log("Server is running on port 3000");
