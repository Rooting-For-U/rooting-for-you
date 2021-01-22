// generator.js
const fs = require('fs');
const argv = require('yargs').argv
const faker = require('faker');
const { image } = require('faker');

const lines = argv.lines || 10;
const filename = argv.output || 'userInfo.csv';
const writeStream = fs.createWriteStream(filename);
let lineId = 0;


const createPost = () => {
  lineId++;

  let id = lineId;
  const userId = faker.internet.userName();
  const password = faker.lorem.word();
  const fullname = faker.name.findName();
  const email = faker.internet.email();

  return `"${id}","${userId}","${password}",${fullname},${email}\n`;
};

const startWriting = (writeStream, encoding, done) => {
  let i = lines;

  function writing() {
    let canWrite = true;
    do {
      i--;
      const post = createPost();
      // check if i === 0 so we would write and call `done`
      if (i === 0) {
        // we are done so fire callback
        writeStream.write(post, encoding, done);
      } else {
        // we are not done so don't fire callback
        canWrite = writeStream.write(post, encoding);
        // monitor data accumulation
      }
      // else call write and continue looping
    } while (i > 0 && canWrite);

    if (i > 0 && !canWrite) {
      // our buffer for stream filled and need to wait for drain
      // Write some more once it drains.
      writeStream.once('drain', writing);
    }
  }
  writing();
};

// write our `header` line before we invoke the loop
writeStream.write('id, userId, password, fullname, email\n', 'utf-8');
// invoke startWriting and pass callback
startWriting(writeStream, 'utf-8', () => {
  writeStream.end();
});

// post on terminal to check
// node database/seedUsers.js --output database/userInfo.csv
