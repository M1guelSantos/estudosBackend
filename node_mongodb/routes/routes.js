const express = require("express");
const router = express.Router()
const Produto = require("../models/Produto")


router.get("/", (req, res)=>{
    res.json({})
})

router.get("/produtos", async (req, res)=>{
    res.json(await Produto.find())
    
})
router.post("/produtos", async (req, res)=>{
    res.json(await Produto.create(req.body))
})

router.get("/produtos/:id", async (req, res)=>{
    res.json(await Produto.findById(req.params.id))
})

router.delete("/produtos/:id", async (req, res)=>{
    res.json(await Produto.findByIdAndDelete(req.params.id))
})

router.put("/produtos/:id", async (req, res)=>{
    res.json(await Produto.findByIdAndUpdate(req.params.id, req.body))
})



module.exports = router