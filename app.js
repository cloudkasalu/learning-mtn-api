const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

app.use(bodyParser.urlencoded({
    extended:true
}))

app.set('view enginne', ejs);
app.use(express.static('public'))


app.get('/', function(req, res){
    res.send("Working")
})


app.listen(process.env.PORT || 3000, function(){
    console.log('Listening on Port 30000')
})
