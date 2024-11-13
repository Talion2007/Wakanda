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
        datanasc: columns[4].value,
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
    const query = `INSERT INTO PROFESSORES (CPF,NOME,EMAIL,TELEFONE,DATANASC) VALUES (@cpf,@nome,@email,@telefone,@datanasc)`;

    const request = new Request(query, (err) => {
      if (err) {
        callback(err); // Chama a função callback com erro se houver falha
      } else {
        callback(null, { message: "Usuario inserido com sucesso!" });
      }
    });
    // Adiciona os parâmetros necessários para a inserção
    request.addParameter("cpf", TYPES.VarChar, data.cpf);
    request.addParameter("nome", TYPES.VarChar, data.nome);
    request.addParameter("email", TYPES.VarChar, data.email);
    request.addParameter("telefone", TYPES.VarChar, data.telefone);
    request.addParameter("datanasc", TYPES.Date, data.datanasc);

    connection.execSql(request); // Executa a consulta
  });

  connection.connect(); // Inicia a conexão
};

//! Função para atualizar um usuário existente
exports.updateUser = (cpf, nome, email, telefone, datanasc, callback) => {
  const connection = createConnection(); // Cria a conexão com o banco de dados

  connection.on("connect", (err) => {
    if (err) {
      return callback(err, null); // Trata erros de conexão
    }
    // Consulta SQL para atualizar o nome do usuário pelo ID
    const query = `UPDATE PROFESSORES SET NOME = '${nome}', EMAIL = '${email}', TELEFONE = '${telefone}', DATANASC = '${datanasc}' WHERE CPF = '${cpf}';`;
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
exports.deleteUser = (cpf, callback) => {
  const connection = createConnection(); // Cria a conexão com o banco de dados

  connection.on("connect", (err) => {
    if (err) {
      return callback(err, null); // Trata erros de conexão
    }

    // Consulta SQL para deletar o usuário pelo ID
    const query = `DELETE FROM PROFESSORES WHERE CPF = ${cpf}`;
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

//! Função para selecionar um usuário existente por CPF
exports.selectUserCPF = (cpf, callback) => {
  const connection = createConnection();
  connection.on('connect', err => {
      if (err) return callback(err, null);

      const query = `SELECT * FROM PROFESSORES WHERE CPF = @cpf`; // Consulta SQL para buscar aluno por RM
      const request = new Request(query, (err) => {
          if (err) return callback(err, null);
      });

      request.addParameter('cpf', TYPES.VarChar, cpf); // Define o parâmetro RM como um inteiro

      let professor = null; // Variável para armazenar o aluno encontrado
      request.on('row', columns => {
          professor = {
            cpf: columns[0].value,
            nome: columns[1].value,
            email: columns[2].value,
            telefone: columns[3].value,
            datanasc: columns[4].value,
          };
      });

      request.on('requestCompleted', () => callback(null, professor)); // Retorna o aluno encontrado
      connection.execSql(request);
  });
  connection.connect();
}

//! Função para selecionar um usuário existente por Nome
exports.selectUserNOME = (nome, callback) => {
  const connection = createConnection();
    connection.on('connect', err => {
        if (err) return callback(err, null);

        const query = `SELECT * FROM PROFESSORES WHERE NOME = @nome`; // Consulta SQL para buscar aluno por RM
        const request = new Request(query, (err) => {
            if (err) return callback(err, null);
        });

        request.addParameter('nome', TYPES.VarChar, nome); // Define o parâmetro RM como um inteiro

        let professor = null; // Variável para armazenar o aluno encontrado
        request.on('row', columns => {
            professor = {
              cpf: columns[0].value,
              nome: columns[1].value,
              email: columns[2].value,
              telefone: columns[3].value,
              datanasc: columns[4].value,
            };
        });

        request.on('requestCompleted', () => callback(null, professor)); // Retorna o aluno encontrado
        connection.execSql(request);
    });
    connection.connect();
}