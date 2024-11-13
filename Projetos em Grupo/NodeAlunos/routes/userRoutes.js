const express = require('express'); 
const router = express.Router();  
const userController = require('../controllers/userController'); 
 
// Rota GET para listar todos os usuários 
router.get('/alunos', userController.getAlunos); 

// Rota POST para criar um novo usuário 
router.post('/alunos', userController.createAlunos); 

// Rota PUT para atualizar um usuário existente 
router.put('/alunos/:rm', userController.updateAlunos); 
 
// Rota DELETE para remover um usuário 
router.delete('/alunos/:rm', userController.deleteAlunos);
 
module.exports = router; 