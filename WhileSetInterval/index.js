// while é um loop sem pausas 
// setInterval é um loop com pausas


/*let n = 0;
  while(n <= 5)  {
      console.log(n)
    n = n + 1;


}

setInterval(function(){
  console.log(n)
  n = n + 1;
}, 1000)

*/ 

let fps = 0;

setInterval(function(){
    //fps = Math.random(30,60)
  fps = Math.round((Math.random(30,60)  ))
  console.clear()
  console.log(FPS, ${fps});



},1000)