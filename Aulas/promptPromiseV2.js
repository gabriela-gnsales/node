import prompt from './promptTool.js';

async function main() {
  const name = await prompt('Qual o seu nome?');
  console.log(name);
  const sobrenome = await prompt('Qual o seu sobrenome?');
  console.log(sobrenome);
  const idade = await prompt('Qual a sua idade?');
  console.log(idade);
  const endereco = await prompt('Qual o seu endereço?');
  console.log(endereco);
}

main();
