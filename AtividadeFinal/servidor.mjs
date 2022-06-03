/*
Crie um servidor HTTP que terá 2 urls:

POST/{data}: quando for uma requisição POST o conteúdo após a / deverá ser adicionado (append) em um arquivo txt;
GET/: retornará o conteúdo do arquivo txt.
*/

import fs from 'fs';
import http from 'http';

async function lerDocumento() {
    const texto = await fs.promises.readFile('./doc.txt', 'utf-8');
    return texto;
}

async function adicionarTexto(texto_novo) {
    await fs.promises.appendFile('./doc.txt', texto_novo, 'utf-8');
    return;
}

const servidor = http.createServer(async (req, res) => {
    const { url, method } = req;

    if (method === "GET") {
        return res.end(await lerDocumento());
    }
    
    if (method === "POST") {
        return res.end(await adicionarTexto());
    }

    res.writeHead(404);
    return res.end('Erro ao processar requisição');
});


servidor.listen(8080);
console.log('Servidor rodando na porta 8080: http://localhost:8080');