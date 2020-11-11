const express = require('express');
const jwt = require('jsonwebtoken');
const config = require('../../config/default.json');
const router = express.Router();
const Word = require('../../models/Word');

router.get('/random', async (req, res) => {
    const word = await Word.findOne();
    res.json({ length: word.name.length, slug: word.slug });
});

router.get('/', async (req, resp) => {
    // const { name } = req.body;
    let indexArray = [];
    try {
        const guess = req.query.guess.toUpperCase()
        let word = await Word.findOne({ slug: req.headers.slug });
        const name = word.name.toUpperCase();
        for (let i = 0; i < name.length; i++) {
            // push index + 1 into array so that the response has the character's number in the word instead of it's index. Makes it a little easier to identify which input to populate the correct guess. Also makes it easier to label input with numbers a User would understand (ex: input #1 instead of input #0)
            name[i] === guess ? indexArray.push(i + 1) : null;
        };
        resp.json(indexArray);
    } catch (error) {
        console.log(error.message);
    };
});

module.exports = router;