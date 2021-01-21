const mysql = require('mysql2');
const login = require('./login.js');

const connection = mysql.createConnection({
  host: 'localhost',
  user: login.user,
  password: login.password,
  database: 'rooting4u',
});

connection.connect((err) => {
  if (err) {
    console.log('connection error', err);
  } else {
    console.log('mysql connected');
  }
});

module.exports = { connection };
