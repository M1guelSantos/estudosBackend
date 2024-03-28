const mongoose = require("mongoose")

const produtoSchema = mongoose.Schema({
    nome: String,
    preco: Number,
    tamanho: String,
    tipo: String,
    ingredientes: [
        "Milho",
        "Tomate",
        "Pimentão",
        "Ovo"
    ]
},)

const Produto = mongoose.model('Produto', produtoSchema)

module.exports = Produto