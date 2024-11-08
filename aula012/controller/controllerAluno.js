//import do arquivo do aluno.js
var aluno = require('../model/aluno.js')

//inserir novo aluno
const inserirAluno = async function(dadosAluno) {
    let result = await aluno.insertAluno(dadosAluno)

    if (result)
        return true
    else
        return false
}

//retorna todos os alunos
const listarAlunos = async function() {
    //chama a função da model para buscar no banco de dados
    let dados = await aluno.selectAllAlunos()

    if (dados)
        return dados

    else
        return false
}

//localiza o aluno pelo ID
const buscarAluno = async function(id) {
    //chama a função da model para buscar no banco de dados
    let dados = await aluno.selectByIdAluno(id)

    if (dados)
        return dados

    else
        return false
}

//atualiza um aluno
const atualizarAluno = async function(dadosAluno, id) {
    //recebe o id
    let idAluno = id

    //adiciona o ID do aluno junto ao seu dado do JSON
    dadosAluno.id = idAluno

    //chama a função para atualizar os dados do aluno
    let result = await aluno.updateAluno(dadosAluno)

    if (result)
        return true
    else
        return false
}

//exclui aluno
const excluirAluno = async function(id) {
    
    let result = await aluno.deleteAluno(id)

    if (result)
        return true

    else
        return false
}


module.exports = {
    inserirAluno, 
    listarAlunos, 
    buscarAluno, 
    atualizarAluno,
    excluirAluno
}