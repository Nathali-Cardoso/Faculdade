const calcularTabuada = function(numero) {
    let tabuada = Number(numero)
    let resultado

    // let cont = 0
    // while (cont <= 10) {
    //     resultado = tabuada * cont
    //     console.log(tabuada + 'x' + cont + '=' + resultado)
    //     cont++  // mesma coisa que cont=+1 
    // }

    for(let cont=0; cont <=10; cont++){
        resultado = tabuada * cont
        //console.log(tabuada + 'x' + cont + '=' + resultado) 
        console.log(`${tabuada}x${cont}=${resultado}`) 
        //pode ser feito dessa forma tbm, com `crase` e não 'aspas' 
    }
}

calcularTabuada(8)