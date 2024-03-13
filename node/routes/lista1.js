const express = require("express");
const router = express.Router()

router.post("/ex1", (req, res) => {
    const n1 = Number(req.body.n1);
    const n2 = Number(req.body.n2);
    const n3 = Number(req.body.n3);
    const n4 = Number(req.body.n4);

    const media = (n1 + n2 + n3 + n4) / 4;
    let retorno = {}

    if (n1 > 10) {
        res.status(400).json({ erro: "Erro! Uma nota não pode passar de 10" })
    } else if (n2 > 10) {
        res.status(400).json({ erro: "Erro! Uma nota não pode passar de 10" })
    } else if (n3 > 10) {
        res.status(400).json({ erro: "Erro! Uma nota não pode passar de 10" })
    } else if (n4 > 10)
        res.status(400).json({ erro: "Erro! Uma nota não pode passar de 10" })
    else {
        retorno.mensagem = media >= 7 ? "Aprovado" : "Reprovado"
        retorno.media = media
        res.status(200).json(retorno);
    }
})


router.post("/ex2", (req, res) => {
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

        retorno = { percentualBranco, percentualnulos, percentualvalidos }

        res.status(200).json(retorno)
    }
})

router.post("/ex3", (req, res) => {
    const salario = Number(req.body.salario)
    const porcentagem = Number(req.body.porcentagem)
    const reajuste = salario * (porcentagem / 100)
    const salarioReajuste = salario + reajuste
    res.status(200).json({ salarioReajuste })
})

router.post("/ex4", (req, res) => {
    const custoCarro = Number(req.body.custoCarro)
    const distribuidor = 28
    const imposto = 45
    const somaDistribuidor = custoCarro * (distribuidor / 100)
    const somaImpostos = custoCarro * (imposto / 100)
    const custoFinal = custoCarro + somaDistribuidor + somaImpostos
    res.status(200).json({ custoFinal })
})

router.post("/ex5", (req, res) => {
    const custoFabrica = Number(req.body.custoFabrica)
    const porcentagemDistri = Number(req.body.porcentagemDistri)
    const imposto = Number(req.body.imposto)
    const somaDistribuidor = custoFabrica * (porcentagemDistri / 100)
    const somaImpostos = custoFabrica * (imposto / 100)
    const custoFinal = custoFabrica + somaDistribuidor + somaImpostos
    res.status(200).json({ custoFinal })
})

router.post("/ex6", (req, res) => {
    const carrosVendidos = Number(req.body.carrosVendidos)
    const totalVendas = Number(req.body.totalVendas)
    const salarioFixo = Number(req.body.salarioFixo)
    const valorCarro = Number(req.body.valorCarro)
    const comissao = carrosVendidos * valorCarro
    const porcentagemComissao = 5 / 100 * totalVendas
    const salarioFinal = salarioFixo + comissao + porcentagemComissao
    res.status(200).json({ salarioFinal })
})

router.post("/ex7", (req, res) => {
    const n1 = Number(req.body.n1)
    const n2 = Number(req.body.n2)
    const pesoN1 = 4
    const pesoN2 = 6
    const mediaFinal = (n1 * pesoN1 + n2 * pesoN2) / (pesoN1 + pesoN2)
    res.status(200).json({ mediaFinal })
})

router.post("/ex8", (req, res) => {
    const raio = Number(req.body.raio)
    const altura = Number(req.body.altura)
    const calculo = Math.PI * (raio ** 2) * altura
    res.status(200).json({ calculo })
})

router.post("/ex9", (req, res) => {
    const n1 = Number(req.body.n1)
    const n2 = Number(req.body.n2)
    const soma = n1 + n2
    const multiplicacao = soma * n1
    res.status(200).json({ multiplicacao })
})


module.exports = router