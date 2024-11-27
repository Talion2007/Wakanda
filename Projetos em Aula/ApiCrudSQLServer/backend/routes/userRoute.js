const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/users", userController.getUser);

// Rota POST para criar um novo usuário 
router.post('/users', userController.createUser); 

// Rota PUT para atualizar um usuário existente 
router.put('/users/:id', userController.updateUser); 
 
// Rota DELETE para remover um usuário 
router.delete('/users/:id', userController.deleteUser);

router.get('/users/:id', userController.getUserById)

module.exports = router;
