const userModel = require('../models/userModel');  // Importa o model para interagir com o banco 
 
// Função para lidar com a requisição de listagem de usuários 
exports.getAlunos = (req, res) => { 
    userModel.getAllUsers((err, alunos) => { 
        if (err) { 
            res.status(500).send('Erro ao buscar usuários');  // Retorna um erro 500 se algo deu errado 
        } else { 
            res.json(alunos);  // Retorna os usuários em formato JSON 
        } 
    }); 
}; 

exports.createAlunos = (req, res) => { 
    const data = req.body;  // Extrai o nome do corpo da requisição 
    userModel.createUser(data, (err) => { 
        if (err) { 
            res.status(500).send('Erro ao criar usuário');  // Retorna um erro 500 se algo deu errado 
        } else { 
            res.status(201).send('Usuário criado com sucesso');  // Retorna status 201 (criado) se bem-sucedido 
        } 
    }); 
}; 
 
// Função para lidar com a requisição de atualização de usuário 
exports.updateAlunos = (req, res) => { 
    const { rm } = req.params;  // Extrai o ID dos parâmetros da URL 
    const { nome, idade, turma } = req.body;  // Extrai o nome do corpo da requisição 
    userModel.updateUser(rm, nome, idade, turma, (err) => { 
        if (err) { 
            res.status(500).send('Erro ao atualizar usuário');  // Retorna um erro 500 se algo deu errado 
        } else { 
            res.send('Usuário atualizado com sucesso');  // Retorna uma mensagem de sucesso 
        } 
    }); 
}; 
 
// Função para lidar com a requisição de remoção de usuário 
exports.deleteAlunos = (req, res) => { 
    const { rm } = req.params;  // Extrai o ID dos parâmetros da URL 
    userModel.deleteUser(rm, (err) => { 
        if (err) { 
            res.status(500).send('Erro ao deletar usuário');  // Retorna um erro 500 se algo deu errado 
        } else { 
            res.send('Usuário deletado com sucesso');  // Retorna uma mensagem de sucesso 
        } 
    }); 
};

exports.getAlunoByRm = (req, res) => { 
    const { rm } = req.params;  // Extrai o ID dos parâmetros da URL 
    userModel.selectUser(rm, (err, alunos) => { 
        if (err) { 
            res.status(500).send('Erro ao buscar usuário');  // Retorna um erro 500 se algo deu errado 
        } else { 
            res.json(alunos);  // Retorna os usuários em formato JSON 
        } 
    }); 
}; 