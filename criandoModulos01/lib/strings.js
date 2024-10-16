const meuNome = "Gabriel Barbosa";

function imprimeNome() {
  console.log(`Meu nome é ${meuNome}`);
}
// EXPORTAÇÃO IMEDIATA
export function caixaAlta(nome) {
  return nome.toUpperCase();
}
// EXPORTAÇÃO IMEDIATA
export function caixaBaixa(nome) {
  return nome.toLowerCase();
}

// EXPORTAÇÃO DEFAULT (PADRÃO)
function separarPorHifen(nome, simbolo) {
  return nome.split("").join(simbolo);
}
export default separarPorHifen;
// EXPORTAÇÃO POSTERIOR DE VALORES
export { meuNome, imprimeNome };
