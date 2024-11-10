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
                '${dadosProfessor.estado}',
                '${dadosProfessor.cep}',
                '${dadosProfessor.email}'

             )`
             
    //executa o script sql no banco de dados
    let result = await prisma.$executeRawUnsafe(sql)
        if (result)
            return true
        else
            return false
}

//Retorna todos os professores
const selectAllProfessores = async function() {
    
    //escript SQL
    let sql = `select * from tbl_professor`
    
    //Executa no banco de dados o SQL
    let rsProfessor = await prisma.$queryRawUnsafe(sql)
    
    if (rsProfessor.length > 0) 
        return rsProfessor
    
    else
    return false
}

//Retorna professor pelo ID
const selectByIdProfessor = async function(id) {
    
    //escript SQL
    let sql = `select * from tbl_professor where id = ${id}`
    
    //Executa no banco de dados o SQL
    let rsProfessor = await prisma.$queryRawUnsafe(sql)
    
    if (rsProfessor.length > 0) 
        return rsProfessor
    
    else
    return false
}

//Atualizar professor no banco 
const updateProfessor = async function(dadosProfessor) {

    let sql = `update tbl_professor set
                nome = '${dadosProfessor.nome}',
                cpf = '${dadosProfessor.cpf}', 
                data_nascimento = '${dadosProfessor.data_nascimento}',
                logradouro = '${dadosProfessor.logradouro}',
                bairro = '${dadosProfessor.bairro}',
                cidade = '${dadosProfessor.cidade}',
                estado = '${dadosProfessor.estado}',
                cep = '${dadosProfessor.cep}',
                email = '${dadosProfessor.email}'
            where id = ${dadosProfessor.id}`
             
    //executa o script sql no banco de dados
    let result = await prisma.$executeRawUnsafe(sql)
        if (result)
            return true
        else
            return false
}

//Exclui professor do banco de dados
const deleteProfessor = async function(id) {

    let sql = `delete from tbl_professor where id = ${id}`
             
    //executa o script sql no banco de dados
    let result = await prisma.$executeRawUnsafe(sql)
        if (result)
            return true
        else
            return false
}


module.exports = {
    insertProfessor,
    selectAllProfessores,
    selectByIdProfessor,
    updateProfessor,
    deleteProfessor
}