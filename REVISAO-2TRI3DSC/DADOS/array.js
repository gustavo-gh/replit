// ARRAY -> ESTRUTURA DE DADOS INDEXADA
// (),[], {}
// SÃO ITERAVEIS OU SEJA, PODEM SER PERCORRIDAOS ATÉ SEU LIMITE
// LOOPS / CICLOS DE REPETIÇÃO -> for, for in, for of, foreach
// FOR > INICIALIZAÇÃO,CONDIÇÃO DE PARADA, INCREMENTO (PASSO OU STEP)

// ARRAYS SÃO UM TIPO DE OBJETO
const pokemonList = ['Pikachu', 'Bulbassauro', 'Charmander', 'Squirtle']
//                   0            1             2             3

console.log(pokemonList[3])// Squirtle
for (let i = 0; i < pokemonList.length; i++) {
    console.log(pokemonList[i])
}

for (let pokemon in pokemonList) {
  console.log(pokemonList[pokemon]);
}

for (let pokemon of pokemonList){
  console.log(pokemon)
}