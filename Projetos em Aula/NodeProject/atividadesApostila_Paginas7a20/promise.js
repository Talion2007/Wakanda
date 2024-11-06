// Importa o módulo 'fs' (File System) e acessa a versão com suporte a Promises
const fs = require('fs').promises;

// Exibe uma mensagem no início do processo
console.log('Início da leitura do arquivo...');

// Usa Promises para ler o arquivo de forma assíncrona
fs.readFile('arquivo.txt', 'utf8')
.then(data => {
// Exibe o conteúdo do arquivo quando a Promise é resolvida
console.log('Conteúdo do arquivo usando Promise:', data);
})
.catch(err => {
// Exibe o erro se a Promise for rejeitada
console.error('Erro ao ler o arquivo com Promise:', err);

});

// Exibe uma mensagem que indica que o código não está bloqueado
console.log('Outras operações continuam...');