var express = require('express');
var bodyParser = require('body-parser');
var port = 3000;

var mainCtrl = require('./controllers/mainCtrl.js');
var middleware = require('./controllers/middleware.js');

var app = express();

app.use(bodyParser.json());

app.use(middleware.addHeaders); // APPLIES HEADERS TO EVERY REQUEST AUTOMATICALLY

// METHODS

app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/occupations/latest', mainCtrl.getLatestOccupation);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:type', mainCtrl.getHobbiesByType);

// app.put('/name', mainCtrl.putName);
// app.put('/location', mainCtrl.putLocation);
app.post('/occupations', mainCtrl.createOccupation);
// app.post('/hobbies', mainCtrl.createHobbies);


app.listen(port, function () {
  console.log("Listening on port ", port);
});
