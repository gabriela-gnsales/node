// CommonJS

// const readline = require('readline');

// import readline from 'readline';

// const terminal = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

terminal.question('Qual o seu nome?', (nome) => {
    console.log('Nome digitado: ' + nome);
    terminal.close();
});


// npm init -y
// node ./prompt.js

// Nome
// Sobrenome
// Idade
// Endereço