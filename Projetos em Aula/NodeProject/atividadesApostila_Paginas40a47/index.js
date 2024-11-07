const express = require('express');
const app = express();

app.use(express.json());

let usuarios = [
    { id: 1, nome: 'João', idade: 21 },
    { id: 2, nome: 'Maria', idade: 18 },
    { id: 3, nome: 'Carlos', idade: 20 },
    { id: 4, nome: 'Madalena', idade: 17 },
];

app.get('/usuarios', (req, res) => {
    res.json(usuarios);
});

app.get('/usuarios/:id', (req,res) => {
    const usuario = usuarios.find(u => u.id === parseInt(req.params.id));

    if  (!usuario) {
        return res.status(404).send('Usuário não foi encontrado, Mané');
    };

    res.json(usuario)
});

app.post('/usuarios', (req,res) => {
    const novoUsuario = {
        id:  usuarios.length + 1, nome: req.body.nome, idade: req.body.idade
    };

    usuarios.push(novoUsuario);
    res.status(201).json(novoUsuario)
});

app.put('/usuarios/:id', (req, res) => {
    const usuario = usuarios.find(u => u.id === parseInt(req.params.id));

    if (!usuario) {
        return  res.status(404).send('Usuário não foi encontrado, Mané');
    }

    usuario.nome = req.body.nome;
    usuario.idade = req.body.idade;
    res.json(usuario);
});

app.delete('/usuarios/:id',  (req, res) => {
    const usuarioIndex = usuarios.findIndex(u =>  u.id === parseInt(req.params.id));

    if (usuarioIndex === -1) {
        return res.status(404).send('Usuário Não Encontrado ;-;')
    }

    const usuarioDelete =  usuarios.splice(usuarioIndex, 1);
    res.status(200).json(usuarioDelete);
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
})


