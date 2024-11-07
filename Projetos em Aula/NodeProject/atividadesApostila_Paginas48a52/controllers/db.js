const { Connection } = require("tedious");

const config = {
  server: "localhost",

  authentication: {
    type: "default",

    options: {
      userName: "TalionElessar",
      password: "TalionElessar2007",
    },
  },
  options: {
    database: "DBUsuarios",
    encrypt: false,
    port: 1433,
    trustServerCertificate: true,
  },
};

function createConnection() { 
  return new Connection(config); // Retorna uma nova instância da classe Connection 
} 
module.exports = createConnection;