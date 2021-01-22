// generator.js
const fs = require('fs');
const { argv } = require('yargs');
const faker = require('faker');
const { image } = require('faker');

//ids numbers
let num = 0;
//userRef id
let lines = 0;
const filename = argv.output || 'plantInfo.csv';
const writeStream = fs.createWriteStream(filename);
//assign random number of plants user has
let userPlants = 0;

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

const randomDate = () => {
  const dates = ['2021-01-18', '2021-01-17', '2021-01-16', '2021-01-15', '2021-01-14', '2021-01-13', '2021-01-12', '2021-01-01', '2021-01-10', '2021-01-03', '2020-12-28', '2021-01-08', '2021-01-02', '2021-01-04', '2021-01-07'];
  const randomNum = Math.floor(Math.random() * 15);
  return dates[randomNum];
}

const plantName = () => {
  const names = ['Hoya Pubicalyx', 'Bird\'s Nest Fern', 'Staghorn Fern', 'Hoya Carnosa', 'Norfolk Island Pine', 'Aloe Vera', 'Hoya Lacunosa', 'Calathea Concinna', 'Pilea Peperomides', 'Sansevieria Starfish', 'Hemionitis Arifolia Heart Fern', 'Begonia Maculata', 'Rabbit\'s Foot Fern', 'Tradescantai Nanouk', 'Snake Plant', 'Prayer Plant' ]
  const randomNum = Math.floor(Math.random() * 16);
  return names[randomNum];
}

const plantImage = () => {
  const plantUrl = [
    'https://images.unsplash.com/photo-1590951013162-549fe02568fd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cGxhbnR8ZW58MHwyfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1591958911259-bee2173bdccc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2VwbGFudHxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1610551724444-5fb527b5ad20?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2VwbGFudHxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1593947662207-e91024487d05?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8aG91c2VwbGFudHxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1594380026562-f12cdf564834?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8aG91c2VwbGFudHxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1574209908880-a2d3caa70f84?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cG90dGVkJTIwcGxhbnR8ZW58MHwyfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1598184875857-6be2852bbe9c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8cG90dGVkJTIwcGxhbnR8ZW58MHwyfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1586802978403-6406fb3ddfff?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8cG90dGVkJTIwcGxhbnR8ZW58MHwyfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1586382399583-434aa3649744?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8cG90dGVkJTIwcGxhbnR8ZW58MHwyfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1583818412016-5596e47a618a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fHBvdHRlZCUyMHBsYW50fGVufDB8MnwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1599598177777-21fece775e88?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvdHRlZCUyMHBsYW50fGVufDB8MnwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1592659819051-6ea7223de0a1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fHBvdHRlZCUyMHBsYW50fGVufDB8MnwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1591079338598-a614328fb2c6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjB8fHBvdHRlZCUyMHBsYW50fGVufDB8MnwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1568056792883-5a2b7fc83419?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzR8fHBvdHRlZCUyMHBsYW50fGVufDB8MnwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1601148812915-a83553e0efe8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDR8fHBvdHRlZCUyMHBsYW50fGVufDB8MnwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1591040802350-fac9192537bd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODF8fHBvdHRlZCUyMHBsYW50fGVufDB8MnwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1536033046054-dafb47b9c086?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OTR8fHBvdHRlZCUyMHBsYW50fGVufDB8MnwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1495908089371-3f0318f8878f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTE0fHxwb3R0ZWQlMjBwbGFudHxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1592659819139-7a2f3ca715bd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTIyfHxwb3R0ZWQlMjBwbGFudHxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1590432893291-3280943614f3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTQ5fHxwb3R0ZWQlMjBwbGFudHxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1594900240017-d99eeb660287?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTU2fHxwb3R0ZWQlMjBwbGFudHxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1528475563668-e15742001b92?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTc3fHxwb3R0ZWQlMjBwbGFudHxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1508515053963-70c7cc39dfb5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjU1fHxwb3R0ZWQlMjBwbGFudHxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
  ]
  const randomNum = Math.floor(Math.random() * 22);
  return plantUrl[randomNum];
}

const createPost = () => {
  if (userPlants === 0) {
    const getRandomNumber = Math.floor(Math.random() * Math.floor(10) + 1);
    userPlants = getRandomNumber;
    lines++;
  }

  const id = num;
  const userRef = lines;
  const plant = plantName();
  const plantImg = plantImage();
  const chosenName = faker.name.firstName();
  const lastWatered = randomDate();
  const status = generateRandomBoolean();
  const location = generateRandomPlace();

  num++;
  userPlants--;

  return `"${id}","${userRef}","${plant}",${plantImg},${chosenName},${lastWatered},${status},${location}\n`;
};

const startWriting = (writeStream, encoding, done) => {
  // let lines = num;

  function writing() {
    let canWrite = true;
    do {
      const post = createPost();
      // check if i === 0 so we would write and call `done`
      if (lines === 10) {
        // we are done so fire callback
        writeStream.write(post, encoding, done);
      } else {
        // we are not done so don't fire callback
        canWrite = writeStream.write(post, encoding);
        // monitor data accumulation
      }
      // else call write and continue looping
    } while (lines < 11 && canWrite);

    if (lines < 11 && !canWrite) {
      // our buffer for stream filled and need to wait for drain
      // Write some more once it drains.
      writeStream.once('drain', writing);
    }
  }
  writing();
};

// write our `header` line before we invoke the loop
writeStream.write('id, userRef, plant_name, plantImg, chosen_name, lastWatered, status, location');
// invoke startWriting and pass callback
startWriting(writeStream, 'utf-8', () => {
  writeStream.end();
});

// post on terminal to check
// node listingsPosts_datagenerator.js --output listingsPosts.csv
