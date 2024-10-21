// Array = []
// JSON - {}

//JSON - {atributo : valor, atributo : valor.... }

//MISTURANDO OS DOIS

let dadosClientes = [
                        {id : 1, nome : 'Nath Cardoso', email : 'nath@gmail.com', celular : '11974079534' },
                        {id : 2, nome : 'Beth Cardoso', email : 'beth@gmail.com', celular : '11955862365' },   
                        {id : 3, nome : 'Feh Cardoso', email : 'feh@gmail.com', celular : '11945566688' },
                        {id : 4, nome : 'Larah Cardoso', email : 'larah@gmail.com', celular : '11911223344' }
                    ]
// forEach - estrutura de repetição para retonar dados especificos do array:
dadosClientes.forEach(function(item){
    console.log(item.email)
})


//Para acrescentar atributos, serão incluídos no final:
// dadosClientes.telefone = '40028922'
// dadosClientes.nascimento = '04/05/1998'




