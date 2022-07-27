const express = require('express');
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname,`/../public`)))

app.get('/', function (_req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

app.get('/js', (_req, res) => {
    res.sendFile(path.join(__dirname, './public/main.js'))
  });

const port = process.env.PORT || 4005
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});

