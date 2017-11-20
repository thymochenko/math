const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//items 10 20 30 40 50 60 70 80 90 100
let lines = []

for(let i = 0; i <= 9; i++){
  rl.question('Digite um número ', (numeros) => {
    // TODO: Log the answer in a database
       let n = []


        lines.push(parseInt(numeros))

        console.log(lines)
        if(parseInt(numeros) === 9){
            rl.close();
        }

      });
}
