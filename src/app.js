require('dotenv').configDotenv()
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/test', (req, res) => {
  res.send({
    msg: 'test successfull',
    time: new Date().toLocaleTimeString(),
    status: "OK",
    statusCode: 200
  })
})

module.exports = {app}