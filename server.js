const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'dist/app-web')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist/app-web', 'index.html'));
});

app.listen(process.env.PORT || 4000, () => {
    console.log("Server Start");
});