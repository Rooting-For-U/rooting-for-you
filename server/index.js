const express = require('express');
const path = require('path');

const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const port = 3000;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', express.static(path.resolve(__dirname, '../client/dist')));

app.get('/', (req, res) => {
  res.send('Rooting for you!');
});

app.post('/login', (req, res) => {
  res.status(200).send(true);
});

app.listen(port, () => {
  console.log(`Rooting for you is listening at http://localhost:${port}`);
});
