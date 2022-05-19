import readline from 'readline';

function prompt(terminal, question) {
  return new Promise((resolve, reject) => {
    terminal.question(question, (result) => {
      resolve(result);
    });
  });
}

async function main() {
  const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const name = await prompt(terminal, 'Qual o seu nome?');
  console.log(name);
  const sobrenome = await prompt(terminal, 'Qual o seu sobrenome?');
  console.log(sobrenome);
  const idade = await prompt(terminal, 'Qual a sua idade?');
  console.log(idade);
  const endereco = await prompt(terminal, 'Qual o seu endereço?');
  console.log(endereco);
  terminal.close();
}

main();
