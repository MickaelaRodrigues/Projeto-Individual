var express = require("express");
var router = express.Router();

var avisoController = require("../controllers/avisoController");



router.get("/listar/:idUsuario", function (req, res) {
    avisoController.listarPorUsuario(req, res);
});


router.post("/publicar/:idUsuario", function (req, res) {
    avisoController.publicar(req, res);
});


router.delete("/deletar/:idUsuario/:idMusica", function (req, res) {
    avisoController.deletar(req, res);
});

module.exports = router;