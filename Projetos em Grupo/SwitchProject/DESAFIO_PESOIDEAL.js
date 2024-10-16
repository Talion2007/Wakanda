let altura  = parseFloat(prompt("Digite a sua altura: "));
let sexo = prompt("Digite o seu sexo (M/F): ");
let opcao = undefined;

if (sexo == "M" || sexo == "m") {
  opcao = "M";
} else if (sexo == "F" || sexo == "f") {
  opcao = "F";
} else  {
  opcao = "Y";
}

if (opcao == "Y") {
  alert("Sexo inválido");
}
else

 if (altura <= 0 || altura >= 3) {
  opcao = "X";
  alert("Altura inválida");
} 
else {

switch (opcao) {
  case "M":
    let pesoM = 72.7 * altura - 58;
    alert("O seu peso ideal é: " + pesoM);
    break;

  case "F":
    let pesoF = 62.1 * altura - 44.7;
    alert("O seu peso ideal é: " + pesoF);
    break;
}
}