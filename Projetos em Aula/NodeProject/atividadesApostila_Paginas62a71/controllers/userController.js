const userModel = require('../models/userModel');  // Importa o model para interagir com o banco 
 
// Função para lidar com a requisição de listagem de usuários 
exports.getUsers = (req, res) => { 
    userModel.getAllUsers((err, users) => { 
        if (err) { 
            res.status(500).send('Erro ao buscar usuários');  // Retorna um erro 500 se algo deu errado 
        } else { 
            res.json(users);  // Retorna os usuários em formato JSON 
        } 
    }); 
}; 