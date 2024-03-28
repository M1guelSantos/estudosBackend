const mongoose = require("mongoose")

const schema = mongoose.Schema({
    nome: String,
})

const Funcionario = mongoose.model('Funcionario', schema)

module.exports = Funcionario