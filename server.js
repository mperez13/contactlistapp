const express = require('express');
const app = express();
const mongojs = require('mongojs');
const bodyParser = require('body-parser');
// tells  you what database and collections will be used here
const db = mongojs('contactlist', ['contactlist']);

// static tells server where to look for our static files (HTML, CSS, JS, images)
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/contactlist',function(req, res){
  console.log("I received a GET request.");

  db.contactlist.find(function(err,docs){
    console.log(docs); // test to make sure we received the data
    res.json(docs); // sends data back to the controller
  });
});

// have our server listen
app.post('/contactlist', function(req, res){
  console.log(req.body); // print data recieves; won't work because the server doesn't know how to parse it
                        // to parse the body need to use the module: body-parser
  // inserts the data into the database & sends data from the database back to the controller
  db.contactlist.insert(req.body, function(err, doc){
    res.json(doc);
  });
});
// delete from MongoDB database
app.delete('/contactlist/:id', function(req, res){
  let id = req.params.id;
  console.log(id);
  db.contactlist.remove({_id: mongojs.ObjectId(id)}, function(err, doc){
    res.json(doc);
  });
});

app.get('/contactlist/:id', function(req,res){
  var id = req.params.id;
  console.log(id);
  db.contactlist.findOne({_id: mongojs.ObjectId(id)}, function(err, doc){
      res.json(doc);
  });
});

app.put('/contactlist/:id', function(req, res){
    var id = req.params.id;
    console.log(req.body.name);
    db.contactlist.findAndModify({query: {_id: mongojs.ObjectId(id)},
      update: {$set: {name: req.body.name, email: req.body.name, number: req.body.number}},
      new: true}, function(err, doc){
        res.json(doc);
    });
});

app.listen(3000);
console.log("Server is running on port 3000");
