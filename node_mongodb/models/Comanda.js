const mongoose = require("mongoose")

const schema = mongoose.Schema({
    mesa: String,
    funcionarioId: Number,
    clienteId: Number,
    formaPagamentoId: Number,
    dataPagamento: Date,
    date: Date
})

const Comanda = mongoose.model('Comanda', schema)

module.exports = Comanda