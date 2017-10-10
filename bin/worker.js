var express = require('express');

var app = express();

var path = require('path');

var bodyParser = require('body-parser');

app.use('/public',express.static(path.join(__dirname,'../public')));

app.use(bodyParser.json({
    limit:"10kb"
}));

app.get('/',(req,res,next)=> {
    res.send('Hello, World!');
});

app.listen(3000,function(err) {
    if(err) console.error(err);
    else console.log(`Running server at port 3000!`) 
});
