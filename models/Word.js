const mongoose = require('mongoose');

const WordSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
    }
});

module.exports = Word = mongoose.model("word", WordSchema);