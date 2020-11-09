const express = require('express');
const router = express.Router();

router.get('/', (req, res) => { res.send("mad users") });

module.exports = router;