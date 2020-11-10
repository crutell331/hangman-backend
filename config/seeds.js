let Word = require('../models/Word');
let jwt = require('jsonwebtoken');
let config = require('config');
let connectDB = require('./db');

connectDB();
let word = new Word({
    name: "test",
    slug: jwt.sign({ name: this.name }, config.get('jwtSecret'))
}).save();


console.log("Seeding", word);
