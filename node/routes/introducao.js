const express = require("express");
const router = express.Router()

router.get("/", (req, res) => {
    res.send("Teste de commit 2")
})


module.exports = router