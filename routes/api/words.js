const express = require('express');
const router = express.Router();
const Words = require('../../models/Word')
router.get('/', (req, res) => { res.send("mad words") });

router.get('/api/words/random', (req, resp) => {
    console.log('got random word');
});
router.get(`/api/words/guess/${slug}`, (req, resp) => {
    console.log('got random word');
});
router.post('/api/words', async (req, resp) => {
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