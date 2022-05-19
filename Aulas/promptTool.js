import readline from 'readline';

const createPrompt = (readline) => {
  return (question) => {
    return new Promise((resolve, reject) => {
      const terminal = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      terminal.question(question, (result) => {
        terminal.close();
        resolve(result);
      });
    });
  };
};

const prompt = createPrompt(readline);
export default prompt;

// CommonsJS
// module.exports = prompt;
