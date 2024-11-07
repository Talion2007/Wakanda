const express = require('express');
const app = express();

const userController = require('./controllers/userController')

app.get('/users',userController.getUsers);

app.listen(4000, () => {
    console.log('Server is running on port 3000, http://localhost:4000');
})