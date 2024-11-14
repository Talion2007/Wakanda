const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express()
const PORT = 3000

app.use(cors())

app.get("/endereco/:cep", async (req,res) => {
    const cep = req.params.cep;

    try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        if (response.data.erro) {
            return res.status(404).json({erro: "CEP NÃO ENCONTRADO!!!"});
        }
        res.json(response.data);
    } catch (error) {
        res.status(500).json({error: "ERRO AO BUSCAR ENDEREÇO!!!"});
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})