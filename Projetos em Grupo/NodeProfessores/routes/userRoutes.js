const express = require('express'); 
const router = express.Router();  
const userController = require('../controllers/userController'); 
 
// Rota GET para listar todos os usuários 
router.get('/professores', userController.getProfessores); 

// Rota POST para criar um novo usuário 
router.post('/professores', userController.createProfessor); 

// Rota PUT para atualizar um usuário existente 
router.put('/professores/:cpf', userController.updateProfessor); 
 
// Rota DELETE para remover um usuário 
router.delete('/professores/:cpf', userController.deleteProfessor);

// Rota GET para listar todos os usuários 
router.get('/professores/cpf/:cpf', userController.getProfessorByCPF); 

// Rota GET para listar todos os usuários 
router.get('/professores/nome/:nome', userController.getProfessorByNOME); 
 
module.exports = router; 