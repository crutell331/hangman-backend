const express = require('express');
const router = express.Router();
const Word = require('../../models/Word');

router.get('/', (req, res) => { res.send("mad words") });

router.get('/random', async (req, res) => {
    const word = await Word.findOne();
    res.json({ length: word.name.length, slug: word.slug });
});

router.post('/words', async (req, resp) => {
    const { name } = req.body;
    try {
        // check for duplicate word
        let word = Word.findOne({ name });
        if (word) {
            res.status(400).json({ error: "Word Already Exists" });
        };

        word = new Word({
            name
        });

    } catch (error) {
        console.log(error.message);
    };
});

module.exports = router;