var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.get("/listar", function (req, res) {
    quizController.listar(req, res);
});

router.post("/salvar", function (req, res) {
    quizController.salvar(req, res);
});

router.get("/obterDados/:fk_usuario", function (req, res) {
    quizController.obterDados(req, res);
});

router.get("/obterDados/tempoReal/:fk_usuario", function (req, res) {
    quizController.obterDadosTempoReal(req, res);
});


module.exports = router;