var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require ('dotenv').config();
var indexRouter = require('./routes/index');
const mongoose = require('mongoose');
const passport = require('passport');
const cors=require('cors');
const app = express();




app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
require("./security/passport")(passport);
//passport 

mongoose.connect(process.env.MONGO_URI)
.then(()=> {
    console.log('Connected to MongoDB');
})
.catch(
    err=>{ 
        console.log('Failed to connect to MongoDB',err);
    }
)

app.use('/api', indexRouter);

module.exports = app;
