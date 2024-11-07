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

module.exports = {
    insertAluno
}