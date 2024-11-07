const createConnection = require("../db"); // Importa a função para criar a conexão com o banco de dados
const { Request, TYPES } = require("tedious"); // Importa as classes necessárias do tedious

// Função para buscar todos os usuários no banco de dados
exports.getAllUsers = (callback) => {
  const connection = createConnection(); // Cria a conexão com o banco de dados
  connection.on("connect", (err) => {
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
    request.on("row", (columns) => {
      result.push({
        id: columns[0].value,
        name: columns[1].value,
      });
    });

    // Ao completar a consulta, retorna o array com todos os usuários
    request.on("requestCompleted", () => {
      callback(null, result); // Retorna o array de resultados
    });

    connection.execSql(request); // Executa a consulta
  });

  connection.connect(); // Inicia a conexão
};

exports.createUser = (data, callback) => {
  const connection = createConnection(); // Cria a conexão com o banco de dados

  connection.on("connect", (err) => {
    if (err) {
      return callback(err, null); // Trata erros de conexão
    }
    // Consulta SQL para inserir um novo usuário
    const query = `INSERT INTO Users (id,name) VALUES (@id,@name)`;

    const request = new Request(query, (err) => {
      if (err) {
        callback(err); // Chama a função callback com erro se houver falha
      } else {
        callback(null, { message: "Usuario inserido com sucesso!" });
      }
    });
    // Adiciona os parâmetros necessários para a inserção
    request.addParameter("id", TYPES.Int, data.id);
    request.addParameter("name", TYPES.VarChar, data.name);

    connection.execSql(request); // Executa a consulta
  });

  connection.connect(); // Inicia a conexão
};

// Função para atualizar um usuário existente
exports.updateUser = (id, name, callback) => {
  const connection = createConnection(); // Cria a conexão com o banco de dados

  connection.on("connect", (err) => {
    if (err) {
      return callback(err, null); // Trata erros de conexão
    }
    // Consulta SQL para atualizar o nome do usuário pelo ID
    const query = `UPDATE Users SET name = '${name}' WHERE id = ${id}`;
    const request = new Request(query, (err) => {
      if (err) {
        callback(err); // Chama a função callback com erro se houver falha
      } else {
        callback(null, { message: "Usuario atualizado com sucesso!" }); // Retorna uma mensagem de sucesso
      }
    });

    connection.execSql(request); // Executa a atualização no banco de dados
  });
  connection.connect(); // Inicia a conexão
};
// Função para deletar um usuário existente
exports.deleteUser = (id, callback) => {
  const connection = createConnection(); // Cria a conexão com o banco de dados

  connection.on("connect", (err) => {
    if (err) {
      return callback(err, null); // Trata erros de conexão
    }

    // Consulta SQL para deletar o usuário pelo ID
    const query = `DELETE FROM Users WHERE id = ${id}`;
    const request = new Request(query, (err) => {
      if (err) {
        callback(err); // Chama a função callback com erro se houver falha
      } else {
        callback(null, { message: "usuario deletado com sucesso!" }); // Retorna uma mensagem de sucesso
      }
    });

    connection.execSql(request); // Executa a remoção no banco de dados
  });
  connection.connect(); // Inicia a conexão
};
