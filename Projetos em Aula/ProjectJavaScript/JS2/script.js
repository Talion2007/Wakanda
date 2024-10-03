document.getElementById('titulo').innerText = "Olá, Mundo em JavaScript Externo!";

//? Está isso funcionando ? Acho que sim
let Mizu = "Kon'nichiwa​";
let Desu = "Vitor Hugo";
let OchaUno = Mizu + ", " + Desu + "!";
console.log(OchaUno);

//* Yamato Kudasaiiiii O~O
// let sominha = 5 + 10
// let resultado = "Berimbadas: " + sominha;
// console.log(resultado);

//! Top demais esses comentários coloridos
let Gohan = "Sekkusu";
let OchaDuo = `${Gohan}, ${Desu}? Kudasai? (O~O)`;
console.log(OchaDuo);

// Todo mundo vai pirar com essas cores
let OchaTri = `Yamato Kudasaiiiiiiiiii... Yamato Kudasaiiiii, ${Desu}... Yamato... Kuda... SAIIIIIIIIII (>O<)`;
console.log(OchaTri);

//? Está gostando da história?
let Sushi = "Arigatou Gozai Masu";
let OchaQuo = `Awawwww, ${Desu}! ${Sushi}! (^O^)`;
console.log(OchaQuo);

//! Teste de Var
var nome = "Pedro";
console.log(nome);  // Saída: "Pedro"

// Opa! O `var` não liga para o escopo do bloco. Ele está em todo lugar!
if (true) {
  var nome = "João";
}
console.log(nome);  // Saída: "João" — Opa! O nome foi alterado para "João" globalmente!