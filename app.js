const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Will it work on my machine.');
});

module.exports = app;