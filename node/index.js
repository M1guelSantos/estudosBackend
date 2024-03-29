const { urlencoded } = require("express");
const express = require("express");
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))

const routes = require('./routes/routes')
app.use("/", routes)

app.listen(3000,(erro) => {
    if(erro){
        console.log("Ocorreu um erro");
    }else{
        console.log("Servidor Iniciado com sucesso")
    }
})

