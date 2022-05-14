console.log('Hello World');

// callback

console.log('Passo 1');

function anyComplex(a, b, callback) {
    const c = a + b;
    setTimeout(() => {
        callback(c);
    }, 2000);    
};

console.log('Passo 2');

anyComplex(10, 5, (result) => {
    console.log('Resultado:', result);
    
    anyComplex(result, 10, (result2) => {
        console.log('Resultado 2:', result2);
    })
});

console.log('Passo 3');

// promise

new Promise((resolve,err) => {
    const c = 10 + 5;
    resolve(c);
})
    .then((result) => {
        console.log('Resultado Promise:', result);
})
    .finally(() => {
        console.log('Acabou!');
});

// async/await

async function getAsync() {
    // bater numa API e buscar dados
    const result = await fetch('https://');
}

// não pode ter async await na raiz, nesse caso tem que usar a sintaxe de Promise ".then"
await getAsync();