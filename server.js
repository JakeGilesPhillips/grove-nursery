const express = require('express');
const path = require('path'); // NEW

const app = express();
const port = process.env.PORT || 7710;

app.use(express.static(path.resolve(__dirname, 'public')));

app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'public', 'index.html')));

app.listen(port, () => console.log('App listening on port: ' + port));