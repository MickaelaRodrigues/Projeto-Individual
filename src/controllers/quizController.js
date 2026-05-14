const e = require("express");
var quizModel = require("../models/quizModel");

function listar(req, res) {
    quizModel.listar().then(function (resultado) {
        if (resultado.length > 0) {
            let vetor_lista_pegunta_id = []
            let json_respostas = {}

            for (let i = 0; i < resultado.length; i++) {
                if (!vetor_lista_pegunta_id.includes(resultado[i].id_pergunta)) {
                    vetor_lista_pegunta_id.push(resultado[i].id_pergunta)
                    json_respostas[resultado[i].id_pergunta] = {
                        pergunta: resultado[i].pergunta,
                        alternativas: [resultado[i].alternativa],
                        caracteristicas: [resultado[i].caracteristica]
                    }
                } else {
                    json_respostas[resultado[i].id_pergunta].alternativas.push(resultado[i].alternativa)
                    json_respostas[resultado[i].id_pergunta].caracteristicas.push(resultado[i].caracteristica)
                }

            }
            json_respostas = Object.values(json_respostas);
            res.status(200).json(json_respostas);

        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function salvar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var fk_usuario = req.body.fk_usuarioServer;
    var fk_alternativa = req.body.fk_alternativaServer;

    // Faça as validações dos valores
    if (fk_usuario == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else if (fk_alternativa == undefined) {
        res.status(400).send("Seu alternativa está undefined!");
    }
    else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        quizModel.salvar(fk_alternativa, fk_usuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function obterDados(req, res) {

    const limite_linhas = 12;

    var fk_usuario = req.params.fk_usuario;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    quizModel.obterDados(fk_usuario, limite_linhas).then(function (resultado) {
       if (resultado.length > 0) {
        
        let resposta_final = []; 

        for (let i = 0; i < resultado.length; i++) {
            let nomeAtual = resultado[i].nome;
            let encontrado = false;

            for (let j = 0; j < resposta_final.length; j++) {
                if (resposta_final[j].nome == nomeAtual) {
                    resposta_final[j].vezes++;
                    encontrado = true;
                    break; 
                }
            }

            if (!encontrado) {
                resposta_final.push({
                    nome: nomeAtual,
                    vezes: 1
                });
            }
        }

        res.status(200).json(resposta_final);

    } else {
        res.status(204).send("Nenhum resultado encontrado!");
    }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


module.exports = {
    listar,
    salvar,
    obterDados
}