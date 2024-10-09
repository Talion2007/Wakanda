document.getElementById("titulo").innerText =
  "Referências de JavaScript";

//! Concatenação: Juntando Strings com o +
// let Mizu = "Kon'nichiwa​";
// let Desu = "Vitor Hugo";
// let OchaUno = Mizu + ", " + Desu + "!";
// console.log(OchaUno);

//? Como Concatenar com Números?
// let sominha = 5 + 10
// let resultado = "Berimbadas: " + sominha;
// console.log(resultado);

//! Template Literals: Uma Forma Moderna e Fácil de Concatenar
// let Gohan = "Sekkusu";
// let OchaDuo = `${Gohan}, ${Desu}? Kudasai? (O~O)`;
// console.log(OchaDuo);

//? Como usar Multiplas Linhas?
// let OchaTri = `Yamato Kudasaiiiiiiiiii... Yamato Kudasaiiiii, ${Desu}... Yamato... Kuda... SAIIIIIIIIII (>O<)`;
// console.log(OchaTri);

//* Exemplo de Template Literals:
// let Sushi = "Arigatou Gozai Masu";
// let OchaQuo = `Awawwww, ${Desu}! ${Sushi}! (^O^)`;
// console.log(OchaQuo);

//* Teste de Var
// var nome = "De dia é Maria";
// console.log(nome);
// if (true) {var nome = "De noite é João";}
// console.log(nome);

//* Teste de Let
// let Var01 = 25;
// console.log(Var01);
// if (true) {let Var01 = 30; console.log(Var01);}
// console.log(Var01);

//* Teste de Const
// const pi = 3.1415;
// console.log(pi);
// pi = 3.14;

//? Quais as Boas Práticas de CamelCase?
// let nomeDoUsuario = "Maria";   // Nome descritivo e claro
// let idadeUsuario = 28;         // Outro exemplo de nome descritivo
// let precoProduto = 59.99;      // Excelente nome para variáveis de preço

//? Quais as Más Práticas de CamelCase?
// let x = "João";  // O que é 'x'? Não sabemos!
// let z = 25;      // 'z' também é misterioso. Melhor evitar.
// let preco$produto = 20.50;  // Cuidado com caracteres especiais como '$'
// let 1idade = 30;  // Não pode começar uma variável com número! Vai dar erro.

//* Exemplo Prático de Var:
// var mensagem = "Oi, tudo bem?";
// console.log(mensagem); // Saída: "Oi, tudo bem?"
// var mensagem = "Olá, mundo!";
// console.log(mensagem); // Saída: "Olá, mundo!" — O valor foi alterado globalmente!

//* Exemplo Prático de Let:
// let nome = "Carlos";
// console.log(nome); // Saída: "Carlos"
// let nome = "Marcos"; // Erro! O `let` não permite redeclaração no mesmo escopo.

//* Exemplo Prático de Const:
// const pi = 3.14;
// console.log(pi); // Saída: 3.14
// pi = 3.14159; // Erro! `const` não permite reatribuir valores.

//? Como Modificar Propriedades internas de Const?
// const pessoa = { nome: "Ana", idade: 25 };
// pessoa.nome = "Maria"; // Permitido, já que estamos mudando uma propriedade interna
// console.log(pessoa.nome); // Saída: "Maria"
// pessoa = {}; // Erro! Não podemos reatribuir o objeto inteiro.

//? Quais as Diferenças entre Var, Let e Const?
// var x = 10;
// var x = 20;
// console.log(x); // Saída: 20 — `var` permite redeclaração
// let y = 10;
// let y = 20; // Erro! `let` não permite redeclarar no mesmo escopo
// const z = 10;
// const z = 20; // Erro! `const` não permite redeclaração ou reatribuição.

//! Tipos Primitivos - Number:
// let idade = 30;            // Um número inteiro
// let altura = 1.75;         // Um número decimal
// console.log(idade);        // Saída: 30
// console.log(altura);       // Saída: 1.75
// let soma = idade + altura; // Operação de soma
// console.log(soma);         // Saída: 31.75

//! Tipos Primitivos - String:
// let nome = "João";         // String com aspas duplas
// let saudacao = 'Oi, tudo bem?';  // String com aspas simples
// let mensagem = `Bem-vindo, ${nome}!`; // Template literal, combinando texto e variáveis
// console.log(nome);         // Saída: "João"
// console.log(saudacao);     // Saída: "Oi, tudo bem?"
// console.log(mensagem);     // Saída: "Bem-vindo, João!"

//! Tipos Primitivos - Boolean:
// let estaChovendo = false;  // Não está chovendo
// let temSol = true;         // Está ensolarado
// console.log(estaChovendo);  // Saída: false
// console.log(temSol);        // Saída: true

//! Tipos Primitivos - Null:
// let resultado = null;  // O resultado ainda não foi calculado
// console.log(resultado);  // Saída: null (nada de propósito)

//! Tipos Primitivos - Undefined:
// let preco;  // Variável declarada, mas sem valor
// console.log(preco);  // Saída: undefined (não há valor atribuído)

//! Tipos Primitivos - Symbol:
// let id = Symbol("id");   // Criando um símbolo
// let id2 = Symbol("id");  // Outro símbolo, mas diferente
// console.log(id === id2);  // Saída: false (são símbolos diferentes)

//! Prompt e Alert
// let salario = prompt("Digite seu Salário")
// let aumento = prompt("Digite seu Aumento")
// let total = parseInt(salario) + (parseInt(salario) / 100 * parseInt(aumento))
// alert("Seu novo salário é " + total) 

//* Exercício de Prompt e Alert:
// let dolar = prompt("Digite suas Doletas")
// let reais = parseFloat(dolar) * 5.567
// alert("Seu novo salário é " + reais) 

//! Operadores Aritiméticos - Adição:
// let soma = 5 + 3;
// console.log(soma);  // Saída: 8

//* Exemplo com String (Atenção):
// let resultado = "5" + 3;
// console.log(resultado);  // Saída: "53"

//! Operadores Aritiméticos - Subtração:
// let subtracao = 8 - 3;
// console.log(subtracao);  // Saída: 5

//! Operadores Aritiméticos - Multiplicação:
// let multiplicacao = 2 * 3;
// console.log(multiplicacao);  // Saída: 6

//! Operadores Aritiméticos - Divisão:
// let divisao = 10 / 2;
// console.log(divisao);  // Saída: 5

// //? O que acontece quando os resultados são Decimais?
// let divisaoDecimal = 7 / 2;
// console.log(divisaoDecimal);  // Saída: 3.5

//! Operadores Aritiméticos - Módulo:
// let resto = 10 % 3;
// console.log(resto);  // Saída: 1

//? É possivel saber se um número é Impar ou Par com Módulo?
// let numero1 = 10;
// let numero2 = 15;
// let restoNumero1 = numero1 % 2;
// let restoNumero2 = numero2 % 2;
// console.log("Resto da divisão de 10 por 2: " + restoNumero1);  // Saída: 0 (Par)
// console.log("Resto da divisão de 15 por 2: " + restoNumero2);  // Saída: 1 (Ímpar)

//* Exemplo de Ordem de Operação:
// let resultado = 5 + 2 * 3 - 4 / 2;
// console.log(resultado);  // Saída: 9

//* Exemplo com Parênteses:
// let resultado = (5 + 2) * (3 - 4 / 2);
// console.log(resultado);  // Saída: 7