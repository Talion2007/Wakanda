// Síncrono: cada função espera a anterior terminar
console.log('1. Início da execução');
console.log('2. Executando...');
console.log('3. Fim da execução');

console.log('1. Início da execução');

setTimeout(() => {
console.log('2. Executando código assíncrono');
}, 2000);

console.log('3. Fim da execução');