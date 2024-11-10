//import da biblioteca do prismaClient()
var {PrismaClient} = require('@prisma/client')

var prisma = new PrismaClient()

//inserir novo professor no banco de dados
const insertProfessor = async function(dadosProfessor) {

    let sql = `insert into tbl_professor (
                nome,
                cpf, 
                data_nascimento,
                logradouro,
                bairro,
                cidade,
                estado,
                cep,
                email
            ) values(
                '${dadosProfessor.nome}',
                '${dadosProfessor.cpf}',
                '${dadosProfessor.data_nascimento}',
                '${dadosProfessor.logradouro}',
                '${dadosProfessor.bairro}',
                '${dadosProfessor.cidade}',
                '${dadosProfessor.estado}'
                '${dadosProfessor.cep}'
                '${dadosProfessor.email}'

             )`
             
    //executa o script sql no banco de dados
    let result = await prisma.$executeRawUnsafe(sql)
        if (result)
            return true
        else
            return false
}

module.exports = {
    insertProfessor
}