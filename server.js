const path = require('path');
const express = require('express');

const app = express();
app.use(express.static(path.resolve(__dirname, 'dist')));

app.get('/api/animal/meowsalot', (req, res) => {
  // tell browser that if it loaded this url in the last 10 seconds to use that if quickly switching between pages
  res.header('Cache-Control', 'max-age=10');
  res.json({
    name: 'Meowsalot',
    species: 'cat',
    photo: 'https://learnwebcode.github.io/json-example/images/cat-1.jpg',
    bio: 'This cat is great and very vocal. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis asperiores, sunt consectetur a amet dolorem rem animi tempore molestias nesciunt fuga, sequi alias voluptatum totam reprehenderit assumenda deleniti distinctio? Cumque.',
  });
});

app.get('/api/animal/barksalot', (req, res) => {
  res.header('Cache-Control', 'max-age=10');
  res.json({
    name: 'Barksalot',
    species: 'dog',
    photo: 'https://learnwebcode.github.io/json-example/images/dog-1.jpg',
    bio: 'This dog is very communicative. Deleniti, tempora quis commodi qui inventore ratione rem porro doloribus et obcaecati cumque quibusdam voluptatibus iure nisi aut minima consequuntur, officiis esse? Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  });
});

app.get('/api/animal/purrsloud', (req, res) => {
  res.header('Cache-Control', 'max-age=10');
  res.json({
    name: 'Purrsloud',
    species: 'cat',
    photo: 'https://learnwebcode.github.io/json-example/images/cat-2.jpg',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis asperiores, sunt consectetur a amet dolorem rem animi tempore molestias nesciunt fuga, sequi alias voluptatum totam reprehenderit assumenda deleniti distinctio? Cumque. Lorem ipsum.',
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './dist/index.html'));
});

app.listen(7000, () => {
  console.log('listening 6000.....');
});
