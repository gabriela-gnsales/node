import fs from 'fs';

// csv ...

const path = 'C:/Users/gabi_/OneDrive/GOLDER/PARANAPANEMA/Em Andamento/Gabriela';

// Promise
// fs.promises.readdir(path)
//     .then(files => {
//         console.log(files)
//     })

// Async/await
async function readDirAsync() {
    const files = await fs.promises.readdir(path);

    for(let i = 0; i < files.length; i++)

    console.log(files);
}
readDirAsync();