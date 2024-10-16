// CRIE UM MÓDULO ESM "personagens.js"
// CRIE FUNÇÕES PARA:
// IMPRIMIR UM OBJETO COM (NOME, POSIÇÃO, TIME)
// EXPORTE A FUNÇÃO (imprimirDadosPersonagens) PARA OUTRO MÓDULO
// IMPORTE O MÓDULO (imprimirDadosPerson) NO SEU ARQUIVO
// INDEX.JS
// UTILIZE O MÓDULO IMPORTADO

import { imprimirDadosPersonagens } from "./lib/personagens.js";

console.log(imprimirDadosPersonagens("Gabriel Barbosa", "Atacante", "Clube de Regatas Flamengo"))

// CRIE UM MÓDULO CJS (.cjs)
//IMPORTE AS FUNÇÕES ( PATH,FS)
// EXPORTAR PATH E FS
// FINALMENTE IMPORTE AQUI NO INDEX

import {path, fs} from './modulos/banana.cjs';

console.log(path);
console.log(fs);