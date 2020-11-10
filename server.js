const express = require('express');
const connectDB = require('./config/db');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5000;
app.use(cors());
connectDB();
app.listen(PORT, () => console.log(`Server Started on PORT ${PORT}`));

app.get('/', (req, res) => res.send('hello world'));

app.use('/api/words', require('./routes/api/words'));

app.use(express.json({ extended: false })); 