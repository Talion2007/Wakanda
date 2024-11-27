const userModel = require("../models/userModel");

exports.getUser = (req, res) => {
  userModel.getAllUsers((err, users) => {
    if (err) {
      res.status(500).send("ERRO AO BUSCAR USUÁRIO");
    } else {
      res.json(users);
    }
  });
};
