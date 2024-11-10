//importando as dependencias a serem utilizadas no projeto
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

// instanciado o objeto do express
const app = express()

//função para atribuir permissões de acesso na API
app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin','*')
    response.header('Access-Control-Allow-Methods','GET, POST, PUT, DELETE, OPTIONS')

    app.use(cors())

    next()
})

//define que o formato de dados chegará no post será do tipo JSON
const bodyParserJSON = bodyParser.json()

 //import da controller do aluno
 const controllerAluno = require('./controller/controllerAluno.js')

 // import da controller do professor
 const controllerProfessor = require('./controller/controllerProfessor.js')

//MVC - definição de model controller e view


//-- FUNÇÕES - ALUNO -- 

//endpoint inserir aluno
app.post('/aluno', cors(), bodyParserJSON, async function(request, response) {
    let dados = request.body

    //encaminha os dados para controller
    let result = await controllerAluno.inserirAluno(dados)

    if (result){
        response.status(201)
        response.json()
    }
    else {
        response.status(400)
        response.json()
    }
        
})

//endpoint listar alunos
app.get('/aluno', cors(), async function(request, response){
    let dadosAluno = await controllerAluno.listarAlunos()

    if (dadosAluno) {
        response.status(200)
        response.json(dadosAluno)
    }
    
    else {
        response.status(404)
        response.json({message: 'Não foram encontrados registros no Banco de Dados'})
    }
})

//endpoint buscar aluno pelo ID
app.get('/aluno/:id', cors(), async function(request, response) {
    let idAluno = request.params.id

        // validação para verificar se o id foi informado na requisição
    if (idAluno == '' || idAluno == undefined) {
        response.status(400)
        response.json({message: 'O ID deve ser informado na requisição'})
    }
    else {
        //encaminha a chamada para a controller filtrar o id
        let dadosAluno = await controllerAluno.buscarAluno(idAluno)

        if (dadosAluno){
            response.status(200)
            response.json(dadosAluno)
        }
        else {
            response.status(404)
            response.json({message: 'O ID informado não foi encontrado no Banco de Dados'})
        }
    }
})

//endpoint alterar dados do aluno
app.put('/aluno/:id', cors(), bodyParserJSON, async function(request, response){
    let idAluno = request.params.id
    let dados = request.body

    let result = controllerAluno.atualizarAluno(dados, idAluno)

    if (result) {
        response.status(200)
        response.json()
    }
    else {
        response.status(400)
        response.json({message: 'Não foi possível atualizar os dados no Banco de Dados'})
    }
})

//endpoint excluir aluno
app.delete('/aluno/:id', cors(), async function(request, response) {
    let idAluno = request.params.id

    let result = controllerAluno.excluirAluno(idAluno)

    if (result) {
        response.status(200)
        response.json()
    }
    else {
        response.status(400)
        response.json({message: 'Não foi possível excluir o registro do Banco de Dados'})
    }
})


//-- FUNÇÕES - PROFESSOR -- 
//endpoint inserir professor
app.post('/professor', cors(), bodyParserJSON, async function(request, response) {
    let dados = request.body

    //encaminha os dados para controller
    let result = await controllerProfessor.inserirProfessor(dados)

    if (result){
        response.status(201)
        response.json()
    }
    else {
        response.status(400)
        response.json()
    }
        
})

//endpoint listar professores
app.get('/professor', cors(), async function(request, response){
    let dadosProfessor = await controllerProfessor.listarProfessores()

    if (dadosProfessor) {
        response.status(200)
        response.json(dadosProfessor)
    }
    
    else {
        response.status(404)
        response.json({message: 'Não foram encontrados registros no Banco de Dados'})
    }
})

//endpoint buscar professor pelo ID
app.get('/professor/:id', cors(), async function(request, response) {
    let idProfessor = request.params.id

    let dadosProfessor = await controllerProfessor.buscarProfessor(idProfessor)

    if (dadosProfessor){
        response.status(200)
        response.json(dadosProfessor)
    }
    else {
        response.status(404)
        response.json({message: 'O ID informado não foi encontrado no Banco de Dados'})
    }
})

//endpoint alterar dados do professor
app.put('/professor/:id', cors(), bodyParserJSON, async function(request, response){
    let idProfessor = request.params.id
    let dados = request.body

    let result = controllerProfessor.atualizarProfessor(dados, idProfessor)

    if (result) {
        response.status(200)
        response.json()
    }
    else {
        response.status(400)
        response.json({message: 'Não foi possível atualizar os dados no Banco de Dados'})
    }
})

//endpoint excluir professor
app.delete('/professor/:id', cors(), async function(request, response) {
    let idProfessor = request.params.id

    let result = controllerProfessor.excluirProfessor(idProfessor)

    if (result) {
        response.status(200)
        response.json()
    }
    else {
        response.status(400)
        response.json({message: 'Não foi possível excluir o registro do Banco de Dados'})
    }
})



app.listen(8080, function(){
    console.log('Servidor aguardando requisições na porta 8080')
})