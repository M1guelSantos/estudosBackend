const express = require("express");
const router = express.Router()

router.post("/ex4", (req, res) => {
    
    const{salarioMinimo, horasTrablhadas, dependentes, horasExtras} = req.body
    
    const valoHoraTrabalhada = salarioMinimo * 0.2
    const salarioMes = valoHoraTrabalhada * horasTrablhadas
    const valorDependente = dependentes * 32
    const valorHoraExtra = valoHoraTrabalhada * 1.5 * horasExtras
    const salarioBruto = salarioMes + valorDependente + valorHoraExtra

    let imposto = 0
    if (salarioBruto > 2000){
        imposto = salarioBruto >= 5000 ? salarioBruto * 0.2 : salarioBruto * 0.1
    }

    const salarioLiquido = salarioBruto - imposto
    const gratificacao = salarioLiquido < 3500 ? 1000 : 500
    const salarioReceber = salarioLiquido + gratificacao

    res.json({salarioReceber})
})


module.exports = router