const express = require("express");
const router = express.Router()

router.post("/ex1", (req, res) => {
    const numeros = req.body  
    let soma = 0
    for(let n of numeros){
        soma += n
    }
    const media = soma / numeros.length
    res.json(media)
})




module.exports = router