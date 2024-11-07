const createConnection = require('../db'); // Importa a função para criar a conexão com o banco de dados 
const { Request, TYPES } = require('tedious'); // Importa as classes necessárias do tedious 
 
// Função para buscar todos os usuários no banco de dados 
exports.getAllUsers = (callback) => { 

    const connection = createConnection(); // Cria a conexão com o banco de dados 
    connection.on('connect', err => { 
        if (err) { 
            return callback(err, null); // Trata erros de conexão 
        } 
        const query = `SELECT * FROM Users`; // SQL para buscar todas os usuários 
        const request = new Request(query, (err, rowCount) => { 
            if (err) { 
                return callback(err, null); // Trata erros de execução da consulta 
            } 
 
            if (rowCount === 0) { 
                return callback(null, []); // Retorna um array vazio se não houver registros 
            } 
        }); 
 
        // Evento 'row' para capturar todas as linhas de resultados 
        const result = []; 
        request.on('row', columns => { 
            result.push({ 
                id: columns[0].value, 
                name: columns[1].value 
            }); 
        }); 
 
        // Ao completar a consulta, retorna o array com todos os usuários 
        request.on('requestCompleted', () => { 
            callback(null, result); // Retorna o array de resultados 
        }); 
 
        connection.execSql(request); // Executa a consulta 
    }); 
 
    connection.connect(); // Inicia a conexão 
}