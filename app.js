const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const msg = 'Will it work on my machine';
    res.send(msg);
});

module.exports = app;
