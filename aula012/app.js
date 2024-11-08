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

//MVC - definição de model controller e view

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
app.get('/aluno/:id', cors(), async function(request, response){
    let dadosAluno = controllerAluno.listarAlunos()

    if (dadosAluno) {
        response.status(200)
        response.json(dadosAluno)
    }
    
    else {
        response.status(404)
        response.json({message: 'Não foram encontrados registros no Banco de Dados'})
    }
})



app.listen(8080, function(){
    console.log('Servidor aguardando requisições na porta 8080')
})