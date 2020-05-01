const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');

const app = express();

app.use(json());
app.use(cors());

const jobs = require('./mock-data/jobs');

app.get('/api/jobs', (req, res) => {
    return res.status(200).json(jobs);
});

app.delete('/api/jobs/:id', (req, res) => {
    let deletedIndex;
    for (let i = 0; i < jobs.length; i++) {
        if (jobs[i].id === +req.params.id) {
            deletedIndex = i;
            break;
        }
    }

    jobs.splice(deletedIndex, 1);

    return res.status(200).json(jobs);
});


app.listen(8888, () => console.log('Server running on port 8888'));
