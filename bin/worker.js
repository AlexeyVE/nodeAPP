var express = require('express');

var app = express();

var path = require('path');

var bodyParser = require('body-parser');

app.set('port',(process.env.PORT||3000))

app.use('/public',express.static(path.join(__dirname,'../public')));

app.use(bodyParser.json({
    limit:"10kb"
}));

app.get('/',(req,res,next)=> {
    res.send('Hello, World!');
});

app.listen(app.get('port'),function(err) {
    if(err) console.error(err);
    else console.log('Running server at port' , app.get('port'))
});
