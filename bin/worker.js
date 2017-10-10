var express = require('express');

var app = express();

app.get('/',(req,res,next)=> {
    res.send('Hello, World!');
});

app.listen(3000,function(err) {
    if(err) console.error(err);
    else console.log(`Running server at port 3000!`) 
});
