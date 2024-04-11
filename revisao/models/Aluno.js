const mongoose = require("mongoose")

const schema = mongoose.Schema({
    nomeAluno: String,
    turma: String,
    notas: [],
})

const Aluno = mongoose.model('Aluno', schema)

module.exports = Aluno