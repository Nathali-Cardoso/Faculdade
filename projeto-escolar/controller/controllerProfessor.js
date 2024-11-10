//import do arquivo do professor.js
var professor = require('../model/professor.js')

//inserir novo aluno
const inserirProfessor = async function(dadosProfessor) {
    let result = await professor.insertProfessor(dadosProfessor)

    if (result)
        return true
    else
        return false
}

module.exports = {
    inserirProfessor
}