//testehttp.js
// Importa o módulo 'http', que é nativo do Node.js e permite criar servidores HTTP.
const http = require('http');

// Define o hostname (endereço do servidor). Neste caso, o '127.0.0.1' é o localhost,
// ou seja, o servidor só estará acessível localmente.
const hostname = '127.0.0.1';

// Define a porta na qual o servidor vai "ouvir" as requisições.

// 3000 é uma porta comum para desenvolvimento.
const port = 4000;

// Cria o servidor HTTP. O método 'createServer' recebe uma função callback que será
// executada a cada vez que o servidor receber uma requisição. A função tem dois parâmetros:
// 'req' (requisição) e 'res' (resposta).
const server = http.createServer((req, res) => {

// Define o código de status da resposta HTTP. 200 significa "OK", ou seja,
// a requisição foi bem-sucedida. Existem muitos outros códigos de status, como:
// 404 (Not Found), 500 (Internal Server Error), 301 (Moved Permanently), etc.
res.statusCode = 200;

// Define um cabeçalho HTTP. Aqui, 'Content-Type' define o tipo de conteúdo que será
// enviado na resposta. 'text/plain' indica que o conteúdo será texto simples.
// Você pode alterar para 'text/html' para enviar HTML, ou 'application/json' para enviar
// um JSON, por exemplo.
//* res.setHeader('Content-Type', 'text/plain');
//! res.setHeader('Content-Type', 'text/html');
res.setHeader('Content-Type', 'application/json');

// Envia a resposta e encerra o processo de resposta. O método 'res.end' envia o conteúdo
// que será exibido no navegador ou na ferramenta que fez a requisição. Após a resposta ser enviada,
// o processo de resposta é considerado concluído.
//* res.end('Hello, World!\n');
//! res.end('<h1>Olá, Alunos!</h1><p>Bem-vindos ao Node.js!</p>');
res.end(JSON.stringify({ message: "Hello, World!", status: "success" }));
});

// O método 'listen' faz o servidor "escutar" requisições na porta e hostname definidos.
// Quando o servidor está rodando, a função callback é executada, aqui é onde você pode exibir uma
// mensagem no console indicando que o servidor está rodando.
// no console para indicar que o servidor está em execução.
server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`);
});