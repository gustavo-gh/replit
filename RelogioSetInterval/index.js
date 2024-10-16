let segundos = 0;
let minutos = 0;
let horas = 0;

setInterval(function () {
  segundos = segundos + 1;
  if (segundos == 60) {
    segundos = 0;
    minutos = minutos + 1;
  }
  if (minutos == 60) {
    minutos = 0;
    horas = horas + 1;
  }
  console.log(horas + ":" + minutos + ":" + segundos);
}, 1000);
