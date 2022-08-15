const express = require('express');
const app = express();
const port = 3000;

app.set('view engine','ejs');

//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));


app.get('/', (req, res) => {
  var title = 'Our Home Page';
  res.render('pages/index',{title:title});
});

//about-us
app.get('/about-us', (req, res) => {
  var title = 'Our About Us Page';
  res.render('pages/about-us',{title:title});
});


app.get('/nuggets', (req, res) => {
  var title = 'Denver Nuggets';
  res.render('pages/nuggets',{title:title});
});

app.get('/suns', (req, res) => {
  var title = 'Phoenix Suns';
  res.render('pages/suns',{title:title});
});

app.get('/hornets', (req, res) => {
  var title = 'Charlotte Hornets';
  res.render('pages/hornets',{title:title});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});