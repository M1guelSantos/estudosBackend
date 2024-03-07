const { response } = require("express");
const express = require("express");
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get("/", (req, res) => {
    res.send("Teste")
})

app.post("/lista1/ex1", (req, res) => {
    
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

app.listen(3000,(erro) => {
    if(erro){
        console.log("Ocorreu um erro");
    }else{
        console.log("Servidor Iniciado com sucesso")
    }
})

