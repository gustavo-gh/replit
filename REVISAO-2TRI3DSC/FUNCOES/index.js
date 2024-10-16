function imprimeOla() {
  console.log("Olá");
}
function olaPessoa(nome) {
  console.log("Olá, " + nome);
}

let salario = 700;

// SET INTERVAL
// setInterval(function () {
//   salario = salario + 100;
//   console.clear();
//   console.log(`Salário:  R$${salario},00`);
// }, 2000);

// crie uma função que retorne um objeto js e execute a msm a cada 1 segundo
// através de um setInterval()

let banana = {
  nome: "Banana",
  sobrenome: "Junior",
  bicosDoDIa: 700,
};

const intervalo = setInterval(function () {
  banana.bicosDoDIa = banana.bicosDoDIa + 1;
  console.clear();
  console.log(banana);
}, 300);

setTimeout(function () {
  clearInterval(intervalo);
  console.log("fim");
}, 3000)