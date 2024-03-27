const express = require("express");
const router = express.Router()

router.post("/ex1", (req, res) => {
    let { salario } = req.body;
    const salarioReajustado = salario <= 2000 ? salario *= 1.5 : salario *= 1.3;
    res.status(200).json({ salarioReajustado })
})

router.post("/ex2", (req, res) => {
    let { n1, n2, n3 } = req.body
    let maiorNumero
    if (n1 > n2 && n1 > n3) {
        maiorNumero = n1
    } else if (n2 > n3) {
        maiorNumero = n2;
    } else {
        maiorNumero = n3;
    }
    res.status(200).json({ maiorNumero })
})

router.post("/ex3", (req, res) => {
    let { chopps, coberturas, pessoas } = req.body;
    const custoTotalChopes = chopps * 4.80
    const custoTotalPizzas = 17 + (coberturas * 1.5)
    const custoTotalConta = custoTotalChopes + custoTotalPizzas
    const taxaGarcom = custoTotalConta * 0.1
    const totalTaxaGarcom = custoTotalConta + taxaGarcom
    const valorFinal = totalTaxaGarcom / pessoas
    res.status(200).json({ valorFinal })
})

router.post("/ex4", (req, res) => {

    const { salarioMinimo, horasTrablhadas, dependentes, horasExtras } = req.body

    const valoHoraTrabalhada = salarioMinimo * 0.2
    const salarioMes = valoHoraTrabalhada * horasTrablhadas
    const valorDependente = dependentes * 32
    const valorHoraExtra = valoHoraTrabalhada * 1.5 * horasExtras
    const salarioBruto = salarioMes + valorDependente + valorHoraExtra

    let imposto = 0
    if (salarioBruto > 2000) {
        imposto = salarioBruto >= 5000 ? salarioBruto * 0.2 : salarioBruto * 0.1
    }

    const salarioLiquido = salarioBruto - imposto
    const gratificacao = salarioLiquido < 3500 ? 1000 : 500
    const salarioReceber = salarioLiquido + gratificacao

    res.json({ salarioReceber })
})

router.post("/ex5", (req, res) => {
    const { id, nota1, nota2, nota3, mediaEx } = req.body;
    const mediaAproveitamento = (nota1 + nota2 * 2 + nota3 * 3 + mediaEx) / 7;
    let conceito = "";
    if (mediaAproveitamento >= 9) conceito = "A";
    else if (mediaAproveitamento >= 7.5) conceito = "B";
    else if (mediaAproveitamento >= 6.0) conceito = "C";
    else if (mediaAproveitamento >= 4.0) conceito = "D";
    else conceito = "E";
    let mensagem = (conceito === "A" || conceito === "B" || conceito === "C") ? "APROVADO" : "REPROVADO";
    res.json({ id, mediaEx, mediaAproveitamento, conceito, mensagem });
})

router.post("/ex6", (req, res) => {
    const { altura, sexo } = req.body;
    let pesoIdeal = sexo === 'masculino' || sexo === 'm' ? (72.7 * altura) - 58 : (62.1 * altura) - 44.7;
    res.json({ pesoIdeal });
})

router.post("/ex7", (req, res) => {
    let { v1, v2, v3 } = req.body
    if (v1 < v2) {
        let temp = v1;
        v1 = v2;
        v2 = temp;
    }
    if (v2 < v3) {
        let temp = v2;
        v2 = v3;
        v3 = temp;
    }
    let soma = v1 + v2;
    res.json({ soma });
})

router.post("/ex8", (req, res) => {
    let{salario, codigoCargo} = req.body
    let aumento;
    switch (codigoCargo) {
        case 101:
            aumento = 0.05;
            break;
        case 102:
            aumento = 0.075;
            break;
        case 103:
            aumento = 0.10;
            break;
        default:
            aumento = 0.15;
    }
    let novoSalario = salario * (1 + aumento);
    let diferenca = novoSalario - salario;
    res.json({salario,novoSalario,diferenca});
    
})

module.exports = router