const express = require("express");

const ProdutoController = require("../controllers/ProdutoController");
const ClienteController = require("../controllers/ClienteController");
const ComandaController = require("../controllers/ComandaController");
const FuncionarioController = require("../controllers/FuncionarioController");
const router = express.Router()



router.get("/", (req, res)=>{
    res.json({})
})

router.get("/produtos", (req,res) => ProdutoController.getAll(req,res))
router.post("/produtos", (req,res) => ProdutoController.create(req,res))
router.get("/produtos/:id",(req,res) => ProdutoController.get(req,res))
router.put("/produtos/:id", (req,res) => ProdutoController.update(req,res))
router.delete("/produtos/:id", (req,res) => ProdutoController.delete(req,res))

router.get("/clientes", (req,res) => ClienteController.getAll(req,res))
router.post("/clientes", (req,res) => ClienteController.create(req,res))
router.get("/clientes/:id",(req,res) => ClienteController.get(req,res))
router.put("/clientes/:id", (req,res) => ClienteController.update(req,res))
router.delete("/clientes/:id", (req,res) => ClienteController.delete(req,res))

router.get("/comandas", (req,res) => ComandaController.getAll(req,res))
router.post("/comandas", (req,res) => ComandaController.create(req,res))
router.get("/comandas/:id",(req,res) => ComandaController.get(req,res))
router.put("/comandas/:id", (req,res) => ComandaController.update(req,res))
router.delete("/comandas/:id", (req,res) => ComandaController.delete(req,res))

router.get("/funcionarios", (req,res) => FuncionarioController.getAll(req,res))
router.post("/funcionarios", (req,res) => FuncionarioController.create(req,res))
router.get("/funcionarios/:id",(req,res) => FuncionarioController.get(req,res))
router.put("/funcionarios/:id", (req,res) => FuncionarioController.update(req,res))
router.delete("/funcionarios/:id", (req,res) => FuncionarioController.delete(req,res))



module.exports = router