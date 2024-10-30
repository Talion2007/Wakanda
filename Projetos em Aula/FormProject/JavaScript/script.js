function calcular() {
    let altura = document.getElementById("altura").value
    let  peso = document.getElementById("peso").value
    let nome = document.getElementById("nome").value

    altura /= 100;

    let indiceMassaCorporal = (peso / (altura*altura)).toFixed(2);

    document.getElementById("IMCresult").innerHTML = `Índice de Massa Corporal de ${nome}: ${indiceMassaCorporal}`

    let nivelIMC

    if (indiceMassaCorporal <= 18.5) {
        nivelIMC =  "Abaixo do peso"
    } else if (indiceMassaCorporal > 18.5 && indiceMassaCorporal  < 25) {
        nivelIMC = "Peso normal"
    } else if  (indiceMassaCorporal >= 25 && indiceMassaCorporal < 30) {
        nivelIMC = "Acima do peso"
    } else if (indiceMassaCorporal >= 30) {
        nivelIMC = "Muito Gordo"
    } else {
        nivelIMC = "Inválido"
    }

    document.getElementById("IMCcategory").innerHTML = `Categoria: ${nivelIMC}`
}