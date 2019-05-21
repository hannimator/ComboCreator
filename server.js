var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";
var express = require('express');
var path = require('path');
var server = express();
var bodyParser = require('body-parser');
/*server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));*/
server.set('port', (process.env.PORT || 5000));

server.use('/', express.static(path.join(__dirname, 'public')));


server.get('/moves/all', (req, res) => { // new
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        dbo.collection('polemoves').find({}).toArray(function (err, result) {
          if (err) throw err;
          console.log(result);
          res.send(result);
        });
    });
});

server.get('/moves', (req, res) => { // new
    const type = req.query.type;
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        dbo.collection('polemoves').find({type}).toArray(function (err, result) {
          if (err) throw err;
          console.log(result);
          res.send(result);
        });
    });
});

server.listen(server.get('port'), function() {
    console.log('listening on port 5000!');
});

