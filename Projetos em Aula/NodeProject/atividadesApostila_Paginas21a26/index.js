// Importa o módulo express 
const express = require('express'); 
 
// Cria uma instância do servidor Express 
const app = express(); 
 
// Define uma rota GET para o caminho raiz '/' 
app.get('/', (req, res) => { 
  // Quando o cliente acessar '/', essa função será executada 
  res.send('Hello, World from Express!'); 
}); 

// Rota '/about' que responde com uma mensagem de descrição 
app.get('/about', (req, res) => { 
    res.send('About this API'); 
  }); 

// Rota '/contact' que responde com uma informação de contato 
app.get('/contact', (req, res) => {
    res.send('Contact us at contact@example.com')
});

app.get('/correia', (req, res) => {
    res.send('Murilo Correa não conseguiu rodar o Programa! Muito Noob!!!')
});
 
// Inicia o servidor e define a porta onde ele estará disponível (3000) 
app.listen(3000, () => { 
  console.log('Servidor rodando em http://localhost:3000'); 
});