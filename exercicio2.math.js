const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('digite 1 número ', (numero) => {
  // TODO: Log the answer in a database
  console.log('Iremos determinar qual é o 10 sucessor par e o 15 sucessor impar '+
    'deste número informado');
    let n = parseInt(numero)
    let sucessorPar, sucessorImpar;
    for(let i = 1; i <= 15; i++){
      n++
      if(n % 2 == 0 && i === 10){
        sucessorPar = n
      }
      else if (n % 1 == 0 && i === 10) {
        sucessorPar =  n+1
      }
      else if(n % 1 == 0 && i === 15){
        sucessorImpar = n+1
      }
      //console.log(n)
    }

  console.log("O décimo sucessor par é : " + sucessorPar);
  console.log("O décimo quinto sucessor impar é : " + sucessorImpar);
  rl.close();
});
