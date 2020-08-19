let express = require('express');
let Router = express.Router();
let axios = require('axios');

Router.use('/:id', (req, res) => {
  let id = req.params.id;
  axios.get(`http://localhost:3001/properties/${id}`)
    .then((data) => {
      res.send(data.data);
    })
    .catch(console.log)
})

module.exports = Router;

// app.get('/properties/:id', (req, res) => {
//   let id = req.params.id;
//   axios.get(`http://localhost:3001/properties/${id}`)
//     .then((data) => {
//       console.log('success')
//       res.send(data.data);
//     })
//     .catch(console.log)
// });

// app.get('/properties/:id', (req, res) => {
//   let id = req.params.id
// });