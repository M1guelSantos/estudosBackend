const mongoose = require("mongoose")

const schema = mongoose.Schema({
    nome: String,
    cpf: String,
    telefone: String,
    email: String
})

const Cliente = mongoose.model('Cliente', schema)

module.exports = Cliente