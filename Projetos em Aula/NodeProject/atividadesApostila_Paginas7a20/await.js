// Importa o módulo 'fs' (File System) e acessa a versão com suporte a Promises
const fs = require('fs').promises;

// Define uma função assíncrona para ler o arquivo
async function lerArquivo() {
// Exibe uma mensagem no início do processo
console.log('Início da leitura do arquivo...');

try {
// Usa 'await' para esperar a leitura do arquivo
const data = await fs.readFile('arquivo.txt', 'utf8');
// Exibe o conteúdo do arquivo
console.log('Conteúdo do arquivo usando Async/Await:', data);
} catch (err) {
// Exibe o erro se houver falha na leitura
console.error('Erro ao ler o arquivo com Async/Await:', err);
}

// Exibe uma mensagem após a conclusão do processo
console.log('Fim da execução assíncrona');
}

// Chama a função para executar
lerArquivo();

// Exibe uma mensagem que indica que o código não está bloqueado
console.log('Outras operações continuam...');