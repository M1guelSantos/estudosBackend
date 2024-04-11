const express = require("express");
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))

const conn = require('./db/conn')
conn()

const routes = require('./routes/routes')
app.use("/", routes)


app.get("/",(req,res)=>{
    res.send("Test")
})


app.listen(3032,(erro) => {
    if(erro){
        console.log("Ocorreu um erro");
    }else{
        console.log("Servidor Iniciado com sucesso")
    }
})