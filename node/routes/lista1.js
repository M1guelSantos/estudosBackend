const express = require("express");
const router = express.Router()

router.post("/ex1", (req, res) => {
    
    const total = Number(req.body.total)
    const brancos = Number(req.body.brancos)
    const nulos = Number(req.body.nulos)
    const validos = Number(req.body.validos)

    const soma = brancos + nulos + validos
 
    let retorno = {}
    if (soma > total) {
        
        retorno = {
            codigo: 'SOMA_ELEITORES',
            mensagem: 'A soma dos votos não pode passar o total de eleitores'
        }
        res.status(400).json(retorno)
    } else {
        const percentualBranco = brancos / total * 100
        const percentualnulos = nulos / total * 100
        const percentualvalidos = validos / total * 100

        retorno = {percentualBranco, percentualnulos, percentualvalidos}

        res.status(200).json(retorno)
    }
})


module.exports = router