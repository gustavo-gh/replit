// Crie UM MODULO ESM "PERSONAGEM.JS"
// CRIE FUNÇÕES PARA:
// IMPRIMA UM OBJETO COM (NOME,PODER,VIDA)
// EXPORTE A FUNÇÃO (imprimirDadosPersoagem) PARA OUTRO MODULO
// IMPORTE A FUNÇÃO (imprimirDadosPersoagem) NO SEU ARQUIVO 
// INDEX.JS
// UTILIZE O MODULO IMPORTADO 

import { imprimirDadosPersoagem } from "./personagem.js";
imprimirDadosPersoagem("Gabriel", "Força", 3000);




// CRIE UM MUDULO CJS(.cjs)
// IMPORTE AS FUNÇÕES (PATH,FS)
// EXPORTAR PATH E FS 
// FINALMENTE IMPORTE O MUDULO CJS NO SEU ARQUIVO INDEX.JS

// const { path, fs } = require('./algumacoisa.cjs');

// console.log(path.join(__dirname, 'file.txt'));
// console.log(fs.readFileSync('file.txt', 'utf-8'));




// const { path, fs } = require('node:fs');

// module.exports = {
//   path,
//   fs
// };
