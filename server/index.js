const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

// const controller = require('./controller/index.js');
const db = require('../database/index.js')
const API_KEY = require('./config/token.js');

const port = 3000;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', express.static(path.resolve(__dirname, '../client/dist')));

//get plants for specific user
app.get('/u/plants', (req, res) => {
  const { id } = req.query;
  console.log('req', id);
  const query = 'SELECT * FROM plant_info INNER Join users ON users.id = plant_info.userRef and users.id = ?';
  db.connection.query(query, Number(id), (err, result) => {
    if (err) {
      res.sendStatus(404);
    }
    res.send(result);
  });
});

// //get plant list by family
app.get('/plants/:family', (req, res) => {
  const { family } = req.params;
  const typeUrl = `https://trefle.io/api/v1/plants/search?token=${API_KEY}&q=${family}`;

  axios.get(typeUrl)
    .then(response => {
      res.send(response.data);
    })
    .catch(err => {
      console.log('error', err);
      res.status(404);
    });
  // can't read function for separation of concern
  // axios.get(controller.plants.getPlantByType(family))
  //   .then(data => {
  //     console.log(data);
  //     res.send(data);
  //   });
  // res.send('Rooting for you!');
});

app.post('/login', (req, res) => {
  res.status(200).send(true);
});

app.listen(port, () => {
  console.log(`Rooting for you is listening at http://localhost:${port}`);
});
