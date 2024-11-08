//import do arquivo do aluno.js
var aluno = require('../model/aluno.js')

const inserirAluno = async function(dadosAluno) {
    let result = await aluno.insertAluno(dadosAluno)

    if (result)
        return true
    else
        return false
}

const listarAlunos = async function() {
    //chama a função para buscar no banco de dados
    let dados = await aluno.selectAllAlunos

    if (dados)
        return dados

    else
        return false
}

module.exports = {
    inserirAluno, 
    listarAlunos
}