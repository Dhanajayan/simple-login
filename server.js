const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');
app.use(cors())
app.use(express.static(path.join(__dirname, 'build')));

app.post('/api/login', function(req, res) {
	return res.send({ success: true, token: uuidv4(), expiresIn: 200000, localId: uuidv4() });
});

app.post('/api/signup', function(req, res) {
	return res.send({ success: true, result: "Signed up successfully" });
});

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);