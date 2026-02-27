const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/api/sort', (req, res) => {
    const { data } = req.body;

    if (!data || typeof data !== 'string') {
        return res.status(400).json({ error: 'Please send a valid string in the "data" field.' });
    }

    const sortedArray = data.toLowerCase().split('').sort();

    return res.json({ word: sortedArray });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});