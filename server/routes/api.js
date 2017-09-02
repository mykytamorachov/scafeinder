const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1:27017/scafeinder', {
        useMongoClient: true
    })
    .then(() => console.log('Connection established.'))
    .catch((err) => console.log('Database is not currently available.'));

/* GET api listing. */
router.get('/', (req, res) => {
    res.send('api works');
});

module.exports = router;