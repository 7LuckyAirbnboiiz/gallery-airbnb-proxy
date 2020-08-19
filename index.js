let express = require('express');
let axios = require('axios');
let bodyParser = require('body-parser');

let app = express();
let PORT = 1010;

app.use('/rooms/:id', express.static('public'));
// app.use(parser.urlencoded({ extended: false }));
//gallery route
// let GalleryRouter = require('./routes/gallery.js');

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

//galleries requests
// app.use('/properties', GalleryRouter);
app.get('/properties/:id', (req, res) => {
  let id = req.params.id;
  axios.get(`http://localhost:3001/properties/${id}`)
    .then((data) => {
      console.log('success')
      res.send(data.data);
    })
    .catch(console.log)
});

//reviews requests
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

//calendar
app.get('/rooms/:room_id/reservation', (req, res) => {
  let id = req.params.room_id
  axios.get(`http://localhost:3002/rooms/${id}/reservation`)
    .then((data) => {
      console.log('hello')
      res.send(data.data);
    })
    .catch(() => {
      console.log('error here')
    })
});

app.post('/rooms/:room_id/reservation', (req, res) => {
  axios.get(`http://localhost:3002/rooms/${id}/reservation`)
    .then((data) => {
      res.send(data.data);
    })
    .catch(() => {
      console.log('error here')
    })
});

//imagess
app.get('/suggestedListings', (req, res) => {
  axios.get(`http://localhost:3004/suggestedListings`)
    .then((data) => {
      res.send(data.data);
    })
    .catch(() => {
      console.log('error here')
    })
});

app.listen(PORT, () => {
  console.log('Listening to: http://localhost:' + PORT)
});
