const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

// const controller = require('./controller/index.js');
const db = require('../database/index.js');
const API_KEY = require('./config/token.js');

const port = 3000;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', express.static(path.resolve(__dirname, '../client/dist')));

// get plants for specific user
app.get('/u/plants', (req, res) => {
  const { id } = req.query;
  // console.log('req', id, req);
  const query = 'SELECT * FROM plant_info INNER Join users ON users.id = plant_info.userRef and users.id = ?';
  db.connection.query(query, Number(id), (err, result) => {
    if (err) {
      res.sendStatus(404);
    }
    // console.log(result, 'result');
    res.send(result);
  });
});

// //get plant list by family
app.get('/plants/:family', (req, res) => {
  const { family } = req.params;
  const typeUrl = `https://trefle.io/api/v1/plants/search?token=${API_KEY}&q=${family}`;

  axios.get(typeUrl)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      console.log('error', err);
      res.status(404);
    });
});

// update water
app.patch('/u/plants/water', (req, res) => {
  console.log(req.body.params, 'patch');
  const { updateWater, userId, chosenName } = req.body.params;
  const query = 'UPDATE plant_info, users SET plant_info.lastWatered = ? WHERE plant_info.chosen_name = ? AND users.id = ? AND plant_info.userRef=users.id;';
  db.connection.query(query, [updateWater, chosenName, userId], (err, result) => {
    if (err) {
      console.log(err, 'error in updating');
      res.status(404);
    }
    res.status(200).send(result);
  });
});

//login user
app.post('/login', (req, res) => {
  console.log(req.body.params, 'req');
  const { username, password } = req.body.params;
  const query = 'SELECT * FROM users WHERE userId = ? and password = ?';
  db.connection.query(query, [username, password], (err, result) => {
    console.log(result, 'result');
    if (result.length === 0) {
      console.log('failed', err);
      message = 'Incorrect username/password';
      res.send(message);
    }
    console.log('succeeded login');
    res.send(result);
    // res.redirect('/homepage');
  });
  // res.status(200).send(2);
});

//make new user
app.post('/signup', (req, res) => {
  const { username, password, fullname, email } = req.body.params;
  const query = 'INSERT INTO users (userId, password, fullname, email) VALUES (?, ?, ?, ?)';
  const values = [ username, password, fullname, email ];
  db.connection.query(query, values, (err, result) => {
    if (!result) {
      console.log('signup fail', err);
      res.send('Username exists');
    }
    console.log(result);
    res.send(result);
  })
});

app.listen(port, () => {
  console.log(`Rooting for you is listening at http://localhost:${port}`);
});
