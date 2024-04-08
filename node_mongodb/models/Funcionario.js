const mongoose = require("mongoose")

const schema = mongoose.Schema({
    nome: String,
    cpf: String,
    endereco: String,
    sexo: String,
    telefone: String,
    cargoId: Number
})

const Funcionario = mongoose.model('Funcionario', schema)

module.exports = Funcionario