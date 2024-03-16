const mongoose = require("mongoose")

async function main() {

    try {
        await mongoose.connect('mongodb+srv://miguelbarros:cluster0.j9gceoh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        console.log('Banco OK')
    } catch (error) {
        console.log('Erro: ' + error)
    }
}

module.exports = main