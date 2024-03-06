const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Teste")
})


app.listen(3000,(erro) => {
    if(erro){
        console.log("Ocorreu um erro");
    }else{
        console.log("Servidor Iniciado com sucesso")
    }
})

