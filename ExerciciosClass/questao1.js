/*
Faça uma chamada para uma API qualquer, exemplo:

https://pokeapi.co/api/v2/pokemon/?limit=151

utilizando a função Fetch (tente ver a documentação de como utilizá-la para complementar o seu conhecimento).

Implemente a requisição utilizando Promise e async/await conforme vimos até então.
*/

// Importar o módulo fetch

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// Promise

// fetch('https://pokeapi.co/api/v2/pokemon/?limit=151', { method: 'GET' })
//     // .then(resposta => resposta.text())
//     .then(resposta => resposta.json())
//     .then(texto => console.log(texto))
//     .catch(error => console.log(error));

// async/await


// async function getPokeAPI() {
//     try {
//         await fetch('https://pokeapi.co/api/v2/pokemon/?limit=151');
//         const res = await resposta.json();
//         return console.log(res);
//     } catch (error) {
//         console.log(error);
//     }
    
// }




