const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');

const app = express();

app.use(json());
app.use(cors());

const jobs = require('./mock-data/jobs');

app.get('/api/jobs', (req, res) => {
    res.status(500).json(jobs);
});


app.listen(8888, () => console.log('Server running on port 8888'));
