import { Console } from "console";
import separarPorHifen, {
  caixaAlta,
  caixaBaixa,
  imprimeNome,
  meuNome,
} from "./lib/strings.js";

console.log(separarPorHifen("Gabriel Barbosa", "-"));

console.log(meuNome);
console.log(imprimeNome());

console.log(caixaAlta("gabriel"));
console.log(caixaBaixa("barBosa"));
