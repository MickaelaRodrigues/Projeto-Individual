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
function cadastrarEstilo(estilo, fk_usuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",  estilo, fk_usuario);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores     
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO estilo (estilo, fk_usuario) VALUES ('${estilo}', '${fk_usuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listar,
    cadastrarEstilo
};