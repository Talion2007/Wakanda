const http = require('http');
const fs = require('fs'); // Importa o módulo 'fs' para manipular arquivos

const hostname = '127.0.0.1';
const port = 5000;

const server = http.createServer((req, res) => {
// Define o caminho para a imagem que você quer enviar
const imagePath = './assets/Imagem2.jpg';

// Lê a imagem como buffer
fs.readFile(imagePath, (err, data) => {
if (err) {
// Se houver erro (ex: arquivo não encontrado), envia um status 500 e mensagem de erro
res.statusCode = 500;
res.setHeader('Content-Type', 'text/plain');
res.end('Error: Could not read image');
} else {

// Se não houver erro, define o tipo de conteúdo como imagem (exemplo: PNG)
res.statusCode = 200;
res.setHeader('Content-Type', 'image/jpg'); // Ajuste o tipo conforme a extensão da sua imagem

// Envia a imagem como buffer na resposta
res.end(data);
}
});
});

// Inicia o servidor e escuta as requisições na porta 3000
server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`);
});