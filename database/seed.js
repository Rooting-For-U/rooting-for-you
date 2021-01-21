const faker = require('faker');
const db = require('./index.js');

const generateRandomBoolean = () => {
  const result = Math.floor(Math.random() * Math.floor(3));
  if (result === 1) {
    return false;
  }
  return true;
};

const generateRandomPlace = () => {
  const place = ['bedroom', 'living room', 'dining room', 'outside', 'bathroom', 'kitchen'];
  const randomNum = Math.floor(Math.random() * 6);
  return place[randomNum];
};

const seedUser = () => {
  for (let i = 1; i <= 10; i++) {
    const sql = 'INSERT into users (id, userId, password, fullname, email) VALUES ( ?, ?, ?, ?, ? )';
    const values = [
      i,
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

    const plantPerUser = () => {
      const plantNum = Math.floor(Math.random() * 5 + 1);
      for (let h = 0; h <= plantNum; h++) {
        const sql2 = 'INSERT into plant_info (userRef, plant_name, plantImg, chosen_name, lastWatered, status, location) VALUES ( ?, ?, ?, ?, ?, ?, ? )';
        const values2 = [
          i,
          faker.name.findName(),
          faker.image.imageUrl(),
          faker.name.firstName(),
          faker.date.recent(),
          generateRandomBoolean(),
          generateRandomPlace(),
        ];

        db.connection.query(sql2, values2, (err) => {
          if (err) {
            throw err;
          }
        });
      }
    };

    plantPerUser();
  }
};

seedUser();
