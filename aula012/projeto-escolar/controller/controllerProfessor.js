//import do arquivo do professor.js
var professor = require('../model/professor.js')

//inserir novo professores
const inserirProfessor = async function(dadosProfessor) {
    let result = await professor.insertProfessor(dadosProfessor)

    if (result)
        return true
    else
        return false
}

//retorna todos os professores
const listarProfessores = async function() {
    //chama a função da model para buscar no banco de dados
    let dados = await professor.selectAllProfessores()

    if (dados)
        return dados

    else
        return false
}

//localiza o professor pelo ID
const buscarProfessor = async function(id) {
    //chama a função da model para buscar no banco de dados
    let dados = await professor.selectByIdProfessor(id)

    if (dados)
        return dados

    else
        return false
}

//atualiza um professor
const atualizarProfessor = async function(dadosProfessor, id) {
    //recebe o id
    let idProfessor = id

    //adiciona o ID do professor junto ao seu dado do JSON
    dadosProfessor.id = idProfessor

    //chama a função para atualizar os dados do professor
    let result = await professor.updateProfessor(dadosProfessor)

    if (result)
        return true
    else
        return false
}

//exclui professor
const excluirProfessor = async function(id) {
    
    let result = await professor.deleteProfessor(id)

    if (result)
        return true

    else
        return false
}

module.exports = {
    inserirProfessor,
    listarProfessores,
    buscarProfessor,
    atualizarProfessor,
    excluirProfessor
}