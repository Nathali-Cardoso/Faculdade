 const PI = 3.14
 const calcularAreaGeometrica = function (tipoFormaGeometrica, valor1, valor2) {
    let opcaoForma = String (tipoFormaGeometrica).toUpperCase()
    let v1 = Number(valor1)
    let v2 = Number(valor2)
    
    let resultado
    let status = true

    switch (opcaoForma) {
        case 'QUADRADO':
            resultado = v1 * v1
            break;
        case 'RETANGULO':
            resultado = v1 * v2
            break;
        case 'CIRCULO':
            resultado = PI * (v1 * v1)
            break;
        default:
            status = false
            break;
    }

    if (status)
        return Number(resultado.toFixed(2))
    else
        return false
 }

 console.log(calcularAreaGeometrica('circulo', 12))