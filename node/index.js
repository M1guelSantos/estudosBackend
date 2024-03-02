const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("VAI SE FUDE JOAO")
})


app.listen(3000,(erro) => {
    if(erro){
        console.log("Ocorreu um erro");
    }else{
        console.log("Servidor Iniciado com sucesso")
    }
})

