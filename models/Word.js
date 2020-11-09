const mongoose = require('mongoose');

const WordSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    slug: {
        type: Number,
        required: true,
    }
});