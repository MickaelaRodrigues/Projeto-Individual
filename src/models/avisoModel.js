var database = require("../database/config");





function listarPorUsuario(idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario()");
    var instrucaoSql = `
    SELECT  idMusica as id,
        nomeMusica as MÚSICA,
        cantor as ARTISTA,
        descricao AS DESCRIÇÃO,
        ano AS ANO,
        tipoSentimento AS SENTIMENTO,
        fk_usuario AS ID_USUÁRIO 
    FROM musicas m JOIN usuario u 
    ON m.fk_usuario = u.id WHERE u.id = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


    function publicar(nomeMusica, cantor,descricao, tipoSentimento,anoCard,idUsuario) {
        console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", nomeMusica, cantor,descricao, tipoSentimento,anoCard,idUsuario);
        var instrucaoSql = `
            INSERT INTO musicas (nomeMusica, cantor,descricao, tipoSentimento,ano,fk_usuario) VALUES ('${nomeMusica}', '${cantor}', '${descricao}', '${tipoSentimento}','${anoCard}', '${idUsuario}');
        `;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    }



function deletar(idMusica, idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idMusica,idUsuario);
    var instrucaoSql = `
        delete from musicas where idMusica = ${idMusica} and fk_usuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listarPorUsuario,
    publicar,
    deletar
}
