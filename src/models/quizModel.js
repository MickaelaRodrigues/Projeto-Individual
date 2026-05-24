var database = require("../database/config")

function listar() {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar(): ");

    var instrucaoSql = `
    SELECT p.id_pergunta, p.pergunta, a.alternativa, c.nome as caracteristica
    from pergunta as p join alternativa as a 
    on a.fk_pergunta = p.id_pergunta left join caracteristica as c on c.fk_alternativa = a.id_alternativa;  
 `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function salvar (fk_alternativa, fk_usuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente.");

    var instrucaoSql = `
        INSERT INTO usuario_alternativa (fk_alternativa, fk_usuario) VALUES ('${fk_alternativa}','${fk_usuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterDados(fk_usuario, limite_linhas) {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar(): ");

    var instrucaoSql = `
    SELECT caracteristica.nome FROM usuario_alternativa
    JOIN alternativa ON usuario_alternativa.fk_alternativa = alternativa.id_alternativa 
    JOIN caracteristica ON caracteristica.fk_alternativa = alternativa.id_alternativa 
    WHERE fk_usuario = ${fk_usuario} ORDER BY dataResposta DESC LIMIT ${limite_linhas};  
 `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterDadosTempoReal(fk_usuario, limite_linhas) {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar(): ");

    var instrucaoSql = `
    SELECT caracteristica.nome FROM usuario_alternativa
    JOIN alternativa ON usuario_alternativa.fk_alternativa = alternativa.id_alternativa 
    JOIN caracteristica ON caracteristica.fk_alternativa = alternativa.id_alternativa 
    WHERE fk_usuario = ${fk_usuario} ORDER BY dataResposta DESC LIMIT ${limite_linhas};  
 `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



module.exports = {
    listar,
    salvar,
    obterDados,
    obterDadosTempoReal
};