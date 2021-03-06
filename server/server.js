require('./config/config');

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//Routes
app.use(require('./routes/index'))


mongoose.connect(process.env.URL_DB, 
                {useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true},(err,res) => {
    if (err) throw err;
    console.log('MongoDB Online ')
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});