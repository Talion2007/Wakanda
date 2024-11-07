const express = require('express'); 
const router = express.Router();  
 
const userController = require('../controllers/userController'); 
 
// Rota GET para listar todos os usuários 
router.get('/users', userController.getUsers); 
 
module.exports = router; 