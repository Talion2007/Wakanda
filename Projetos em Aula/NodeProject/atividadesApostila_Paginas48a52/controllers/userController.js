const createConnection = require("./db");
const { Request } = require("tedious");

exports.getUsers = (req, res) => {
  const connection = createConnection();

  connection.on("connect", (err) => {
    if (err) {
      console.error("Erro na conexão", err.mensage);
      return (
        res.status(500), json({ error: "Erro ao conectar ao banco de dados" })
      );
    }

    const query = "SELECT * FROM users";
    const result = [];

    const request = new Request(query, (err, rowCount) => {
      if (err) {
        console.error("Erro na consulta", err.message);
        return res
          .status(500)
          .json({ error: "Erro ao consultar banco de dados" });
        connection.close();
        return;
      }
      console.log(`${rowCount} linhas retornadas`);
    });

    request.on("row", (columns) => {
      const user = {};
      columns.forEach((column) => {
        user[column.metadata.colName] = column.value;
      });
      result.push(user);
    });

    request.on("requestCompleted", () => {
      res.status(200).json(result);
      connection.close();
    });

    connection.execSql(request);
  });

  connection.connect();
};
