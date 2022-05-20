/*
Faça uma chamada para uma API qualquer, exemplo:

https://pokeapi.co/api/v2/pokemon/?limit=151

utilizando a função Fetch (tente ver a documentação de como utilizá-la para complementar o seu conhecimento).

Implemente a requisição utilizando Promise e async/await conforme vimos até então.
*/

// Importar o módulo fetch

// import fetch from 'node-fetch';
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// Promise

fetch('https://pokeapi.co/api/v2/pokemon/?limit=151', { method: 'GET' })
// fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
    // .then(response => response.text())
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));

// async/await

async function getPokeAPI() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=151');
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }   
}
getPokeAPI().then(data => {
    console.log(data);
  });