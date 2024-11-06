// Importa o módulo 'fs' (File System) para manipular arquivos no Node.js
const fs = require('fs');

// Exibe uma mensagem no início do processo
console.log('Início da leitura do arquivo...');

// Usa 'fs.readFile' para ler o arquivo de maneira assíncrona
fs.readFile('arquivo.txt', 'utf8', (err, data) => {
// Se houver um erro, ele será exibido no console
if (err) {
console.error('Erro ao ler o arquivo:', err);
return;
}

// Caso contrário, exibe o conteúdo do arquivo
console.log('Conteúdo do arquivo:', data);
});

// Exibe uma mensagem que indica que o código não está bloqueado
console.log('Outras operações continuam...');