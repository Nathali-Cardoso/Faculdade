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
    let dados = aluno.
}

module.exports = {
    inserirAluno
}