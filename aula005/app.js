//Modelo tracidional para criar funções no Node.JS

//  function calcularMedia(nota1, nota2, nota3, nota4){
//     let valor1 = nota1
//     let valor2 = nota2
//     let valor3 = nota3
//     let valor4 = nota4

//     let media
//     let status

//         //Valida se as entradas de dados são: vazia, indefinida ou diferente de número
//     if(
//         valor1 == '' || valor1 == undefined || typeof(valor1) != 'number' ||
//         valor2 == '' || valor2 == undefined || typeof(valor2) != 'number' ||
//         valor3 == '' || valor3 == undefined || typeof(valor3) != 'number' ||
//         valor4 == '' || valor4 == undefined || typeof(valor4) != 'number' )
//         {
//             status = false
//         }

//         else {
//             media = (valor1 + valor2 + valor3 + valor4)/4
//             status = true
//         }

//         //Validação para retonar valor calculado ou false
//         if(status)
//             return Number(media.toFixed(1)) //limita a mostragem de casa decimal
//         else
//             return false
//  }


//Modelo 02 de criação de funções no Node.JS (Call Back, modelo mais utilizado)
 const calcularMedia = function (nota1, nota2, nota3, nota4){
    let valor1 = nota1
    let valor2 = nota2
    let valor3 = nota3
    let valor4 = nota4

    let media
    let status

        //Valida se as entradas de dados são: vazia, indefinida ou diferente de número
    if(
        valor1 == '' || valor1 == undefined || typeof(valor1) != 'number' ||
        valor2 == '' || valor2 == undefined || typeof(valor2) != 'number' ||
        valor3 == '' || valor3 == undefined || typeof(valor3) != 'number' ||
        valor4 == '' || valor4 == undefined || typeof(valor4) != 'number' )
        {
            status = false
        }

        else {
            media = (valor1 + valor2 + valor3 + valor4)/4
            status = true
        }

        //Validação para retonar valor calculado ou false
        if(status)
            return Number(media.toFixed(1)) //limita a mostragem de casa decimal
        else
            return false
 }
 

//Modelo 03 de criação de função no Node.JS (Arrow Function)
const statusMedia = (media) => {
    let mediaEscolar = Number(media)

    if (mediaEscolar < 6)
        return 'Reprovado'
    else
        return 'Aprovado'
}

let valorMedia = calcularMedia(4, 5.7, 3.9, 2)
let statusAluno = statusMedia(valorMedia)

console.log('O aluno ficou com a média final de '+ valorMedia +' portanto foi '+statusAluno)
