// useEffect(() => {
//   // buscar na API
//   const result = await fetch('https://');

// }, []);

// console.log('Hello world!');

// - callback
// console.log('Passo 1');

// function anyComplex(a, b, callback) {
//   const c = a + b;
//   setTimeout(() => {
//     callback(c);
//   }, 2000);
// }

// console.log('Passo 2');
// // Funções aninhadas
// anyComplex(10, 5, (result) => {
//   console.log('Resultado: ' + result);

//   anyComplex(result, 10, (result2) => {
//     console.log('Resultado 2: ' + result2);
//   });
// });
// console.log('Passo 3');

// - promise
function anyComplexPromise(a, b) {
  return new Promise((onSuccess, onError) => {
    // try {
    const c = 10 + 5;
    // aqui demora pra executar
    onSuccess(c);
    // } catch (err) {
    //   onError(err);
    // }
  });
}

// anyComplexPromise(10, 5)
//   .then((result) => {
//     console.log('Resultado promise: ' + result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// - async/await
async function calculateAsync() {
  try {
    const resultAsync = await anyComplexPromise(10, 5);
    console.log('Resultado async/await: ' + resultAsync);
  } catch (err) {
    console.log(err);
  } finally {
  }
}

async function calculateAsyncWithPromise() {
  calculateAsync().then(() => {
    console.log('Terminou!');
  });
}

calculateAsyncWithPromise();
