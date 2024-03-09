const { response } = require("express");
const express = require("express");
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))

const introducao = require('./routes/introducao')
const lista1 = require('./routes/lista1')

app.use('/', introducao)
app.use('/lista1', lista1)




app.listen(3000,(erro) => {
    if(erro){
        console.log("Ocorreu um erro");
    }else{
        console.log("Servidor Iniciado com sucesso")
    }
})

