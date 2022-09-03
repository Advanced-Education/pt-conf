const path = require('path');
const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '/client/index.html'));
});

app.get('/stylesheets/styles.scss', (req, res) => {
  return res
    .status(200)
    .sendFile(path.join(__dirname, '../stylesheets/style.scss'));
});

app.get('/dist/bundle.js', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '/dist/bundle.js'));
});

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
