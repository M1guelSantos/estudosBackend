const Aluno = require("../models/Aluno")

const AlunoController = {
    getAll: async (req, res) => {
        res.json(await Aluno.find())
    },
    create: async (req, res) => {
        try {
            const notas = req.body.notas
            const media = req.body.media 
            res.json(await Aluno.create(req.body))
        } catch (error) {
            res.status(404).json({ error: 'Registro não encontrado' })
        }
    },

    get: async (req, res) => {
        try {
            res.json(await Aluno.findById(req.params.id))
        } catch (error) {
            res.status(404).json({ error: 'Registro não encontrado' })
        }
    },

    update: async (req, res) => {
        try {
            res.json(await Aluno.findByIdAndUpdate(req.params.id, req.body))
        } catch (error) {
            res.status(404).json({ error: 'Registro não encontrado' })
        }
    },

    delete: async (req, res) => {
        try {
            res.json(await Aluno.findByIdAndDelete(req.params.id))
        } catch (error) {
            res.status(404).json({ error: 'Registro não encontrado' })
        }
    },
}

module.exports = AlunoController