//Importe das dependencias a serem utilizadas no projeto

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

//criando um obj com todas as referencias do express
const app = express()

//Request - requisições, ou seja solicitações que vão chegar para a API
//Response - respostas que a API irá realizar tendo como base as requisições

//função para atribuir permissões de acesso na API
app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin','*')
    response.header('Access-Control-Allow-Methods','GET, POST, PUT, DELETE, OPTIONS')

    app.use(cors())

    next()
})

//EndPoint
app.get('/fecaf/livros', cors(), async function (request, response) {
    let livros =  { livros :
                        [
                            {id : 1, nome : 'O ladrão de Almas'},
                            {id : 2, nome : 'Os Adoráveis'},
                            {id : 3, nome : 'Percy Jackson'},
                            {id : 4, nome : 'Quem é você, Alasca ?'}
                        ]
                            }
    
    response.json(livros)
    response.status(200)
})

app.listen(8080, function(){
    console.log('Servidor aguardando requisições na porta 8080')
})