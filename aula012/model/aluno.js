//import da biblioteca do prismaClient()
var {PrismaClient} = require('@prisma/client')

var prisma = new PrismaClient()

//inserir novo aluno no banco de dados
const insertAluno = async function(dadosAluno) {

    let sql = `insert into tbl_aluno (
                nome,
                celular, 
                email,
                cpf
            ) values(
                '${dadosAluno.nome}',
                '${dadosAluno.celular}',
                '${dadosAluno.email}',
                '${dadosAluno.cpf}'
             )`
             
    //executa o script sql no banco de dados
    let result = await prisma.$executeRawUnsafe(sql)
        if (result)
            return true
        else
            return false
}

//Retorna todos os alunos
const selectAllAlunos = async function() {
    
    //escript SQL
    let sql = `select * from tbl_aluno`
    
    //Executa no banco de dados o SQL
    let rsAluno = await prisma.$queryRawUnsafe(sql)
    
    if (rsAluno.length > 0) 
        return rsAluno
    
    else
    return false
}

//Retorna aluno pelo ID
const selectByIdAluno = async function(id) {
    
    //escript SQL
    let sql = `select * from tbl_aluno where id = ${id}`
    
    //Executa no banco de dados o SQL
    let rsAluno = await prisma.$queryRawUnsafe(sql)
    
    if (rsAluno.length > 0) 
        return rsAluno
    
    else
    return false
}

//Atualizar aluno no banco 
const updateAluno = async function(dadosAluno) {

    let sql = `update tbl_aluno set
                nome = '${dadosAluno.nome}',
                celular = '${dadosAluno.celular}', 
                email = '${dadosAluno.email}',
                cpf = '${dadosAluno.cpf}'
            where id = ${dadosAluno.id}`
             
    //executa o script sql no banco de dados
    let result = await prisma.$executeRawUnsafe(sql)
        if (result)
            return true
        else
            return false
}

//Exclui aluno do banco de dados
const deleteAluno = async function(id) {

    let sql = `delete from tbl_aluno where id = ${id}`
             
    //executa o script sql no banco de dados
    let result = await prisma.$executeRawUnsafe(sql)
        if (result)
            return true
        else
            return false
}

module.exports = {
    insertAluno,
    selectAllAlunos,
    selectByIdAluno, 
    updateAluno,
    deleteAluno
}