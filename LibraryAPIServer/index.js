const Joi = require('joi');
const express = require('express');
const app = express();
app.use(express.json());

app.use( function(req,res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');   
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

const bookRouter = require('./routes/books');
app.use('/api/v1/books', bookRouter);

app.get('/', (req, res) => {
    res.send('Hello world');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));