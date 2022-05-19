// CommonJS
// const readline = require('readline');
import readline from 'readline';

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

terminal.question('Qual o seu nome?', (name) => {
  console.log('Nome digitado: ' + name);
  terminal.question('Qual o seu sobrenome?', (name) => {
    console.log('Sobrenome digitado: ' + name);
    terminal.question('Qual a sua idade?', (name) => {
      console.log('Idade digitada: ' + name);
      terminal.question('Qual o seu endereço?', (name) => {
        console.log('Endereço digitado: ' + name);
        terminal.close();
      });
    });
  });
});
