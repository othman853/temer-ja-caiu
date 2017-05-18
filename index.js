const path = require('path');
const express = require('express');

const port = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.join(__dirname, 'static')));

app.get('/', (_, res) => res.sendFile(path.join(__dirname, 'static', 'index.html')));

app.listen(port, console.log.bind(console, `up on ${port}`));
