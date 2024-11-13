const createConnection = require("../db"); // Importa a função para criar a conexão com o banco de dados
const { Request, TYPES } = require("tedious"); // Importa as classes necessárias do tedious

//! Função para buscar todos os usuários no banco de dados
exports.getAllUsers = (callback) => {
  const connection = createConnection(); // Cria a conexão com o banco de dados
  connection.on("connect", (err) => {
    if (err) {
      return callback(err, null); // Trata erros de conexão
    }
    const query = `SELECT * FROM PROFESSORES`; // SQL para buscar todas os usuários
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
        cpf: columns[0].value,
        nome: columns[1].value,
        email: columns[2].value,
        telefone: columns[3].value,
        datanasc: columns[4].value
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

    //! Consulta SQL para inserir um novo usuário
    const query = `INSERT INTO Alunos (rm,nome,idade,turma) VALUES (@rm,@nome,@idade,@turma)`;

    const request = new Request(query, (err) => {
      if (err) {
        callback(err); // Chama a função callback com erro se houver falha
      } else {
        callback(null, { message: "Usuario inserido com sucesso!" });
      }
    });
    // Adiciona os parâmetros necessários para a inserção
    request.addParameter("rm", TYPES.Int, data.rm);
    request.addParameter("nome", TYPES.VarChar, data.nome);
    request.addParameter("idade", TYPES.Int, data.idade);
    request.addParameter("turma", TYPES.VarChar, data.turma);

    connection.execSql(request); // Executa a consulta
  });

  connection.connect(); // Inicia a conexão
};

//! Função para atualizar um usuário existente
exports.updateUser = (rm, nome, idade, turma, callback) => {
  const connection = createConnection(); // Cria a conexão com o banco de dados

  connection.on("connect", (err) => {
    if (err) {
      return callback(err, null); // Trata erros de conexão
    }
    // Consulta SQL para atualizar o nome do usuário pelo ID
    const query = `UPDATE Alunos SET nome = '${nome}', idade = '${idade}', turma = '${turma}' WHERE rm = '${rm}';`;
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

//! Função para deletar um usuário existente
exports.deleteUser = (rm, callback) => {
  const connection = createConnection(); // Cria a conexão com o banco de dados

  connection.on("connect", (err) => {
    if (err) {
      return callback(err, null); // Trata erros de conexão
    }

    // Consulta SQL para deletar o usuário pelo ID
    const query = `DELETE FROM Alunos WHERE rm = ${rm}`;
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

//! Função para selecionar um usuário existente
exports.selectUser = (rm, callback) => {
  const connection = createConnection(); // Cria a conexão com o banco de dados

  connection.on("connect", (err) => {
    if (err) {
      return callback(err, null); // Trata erros de conexão
    }

    // Consulta SQL para deletar o usuário pelo ID
    const query = `SELECT * FROM Alunos WHERE rm = ${rm}`;
    const request = new Request(query, (err, rowCount) => {
      if (err) {
        return callback(err, null); // Trata erros de execução da consulta
      }

      if (rowCount === 0) {
        return callback(null, []); // Retorna um array vazio se não houver registros
      }
    });

    const result = [];
    request.on("row", (columns) => {
      result.push({
        rm: columns[0].value,
        nome: columns[1].value,
        idade: columns[2].value,
        turma: columns[3].value,
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