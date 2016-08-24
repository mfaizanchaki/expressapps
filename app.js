var express = require('express');
var app = express();

app.get('/', function(req, res, next){
	res.send('Assalamu alaikum');
});

app.listen(3000);
console.log('Express app stated on port 3000');