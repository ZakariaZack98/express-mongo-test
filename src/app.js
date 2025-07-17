require('dotenv').configDotenv()
const express = require('express');
const app = express();
const userController = require('./controller/user.controller');
const categoryController = require('./controller/category.controller')

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

app.get('/allcategory', categoryController.getAllCategory);
app.get('/category/:name', categoryController.getSingleCategory);
app.post('/registration', userController.registration);
app.post('/login', userController.login);
app.post('/create-category', categoryController.createCategory);
app.put('/update-category/:id', categoryController.updateCategory);
app.delete('/delete-category/:id', categoryController.deleteCategory);

module.exports = {app}