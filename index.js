let express = require('express');
let axios = require('axios');
let parser = require('body-parser');

let app = express();
let PORT = 1010;

app.use('/', express.static('public'));
app.use(parser.urlencoded({ extended: false }));

app.get('/properties/:id', (req, res) => {
  let id = req.params.id;
  axios.get(`http://localhost:3001/properties/${id}`)
    .then((data) => {
      console.log('success')
      res.send(data.data);
    })
    .catch(console.log)
});


app.get('/reviews/users', (req, res) => {
  axios.get(`http://localhost:3003/reviews/users`)
    .then((data) => {
      res.send(data.data);
    })
    .catch(console.log)
});

app.get('/reviews/houses', (req, res) => {
  axios.get(`http://localhost:3003/reviews/houses`)
    .then((data) => {
      res.send(data.data);
    })
    .catch(console.log)
});

app.get('/reviews/comments', (req, res) => {
  axios.get(`http://localhost:3003/reviews/comments`)
    .then((data) => {
      res.send(data.data);
    })
    .catch(console.log)
});

app.get('/reviews', (req, res) => {
  axios.get(`http://localhost:3003/reviews`)
    .then((data) => {
      res.send(data.data);
    })
    .catch(console.log)
});


app.listen(PORT, () => {
  console.log('Listening to locahost:' + PORT)
});
