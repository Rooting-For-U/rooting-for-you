const faker = require('faker');
const db = require('./index.js');

const generateRandomBoolean = () => {
  const result = Math.floor(Math.random() * Math.floor(3));
  if (result === 1) {
    return false;
  }
  return true;
};

const seedData = () => {
  for (let i = 0; i < 10; i++) {
    const sql = 'INSERT into users (userId, password, fullname, email) VALUES ( ?, ?, ?, ? )';
    const values = [
      faker.internet.userName(),
      faker.lorem.word(),
      faker.name.findName(),
      faker.internet.email(),
    ];

    db.connection.query(sql, values, (err) => {
      if (err) {
        throw err;
      }
    });
  }
};

seedData();
