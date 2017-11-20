const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//items 10 20 30 40 50 60 70 80 90 100

  rl.question(' Digite uma sequência numérica ', (str) => {
       let numbers = {0:"zero",1:"um",2:"dois",3:"três",4:"quatro",5:"cinco",6:"seis",7:"sete",8:"oito",9:"nove"}
       let unidadesSimples = ["unidades","dezenas", "centenas"]
       let expression = []
       let coma = []
       let expressaux = []
       let result = []
       let numeroNatural = []
       let OrderTokens = []
       let orderedTokens = []
       str = "nove centenas mais seis dezenas mais oito unidades"

       clientPhrase = str.split(" ")
       let phraseTokens = clientPhrase.filter(e => e !== "mais")

       for(let c = 0; c < phraseTokens.length;c++){
         if(c === 0){
           OrderTokens[c] = phraseTokens[c] + " " + phraseTokens[c+1];
         }
         else if(c > 0){
           OrderTokens[c] = phraseTokens[c+1] + " " + phraseTokens[c+2];
         }

         if(OrderTokens[c].indexOf("undefined") === -1){
           orderedTokens[c] = OrderTokens[c]
         }

       }

       console.log(orderedTokens);
      //{0:["nove", "centenas"], 1:["seis","dezenas"], 2:["oito", "unidades"]}
       //console.log(phraseTokens)
       //console.log(OrderTokens)
       //console.log(orderedTokens);

       let count = 0
       let orderCount = 0
       for(var n in numbers){
         for(let z=0; z < phraseTokens.length;z++){
           for(var o in orderedTokens){
             //conversão das strings com os tokes em um padrão tokeymon1 token2 {coma}
              //let newarr =  phraseTokens[z] +  " " + unidadesSimples[u]
              primaryToken = phraseTokens[z] + " " + phraseTokens[z+1]
                if(numbers[n] === phraseTokens[z] && orderedTokens[o] === primaryToken){
                  console.log(
                    "numbers: " + n +
                    "  arr: " + phraseTokens[z] +
                    " z : {" + z + "}" +
                    " orderedTokens : {" + primaryToken  + "} " +
                    " numbers: " + n +
                    " o : {" + o +
                    "}")
                     numeroNatural.push(n)
                     orderCount++
                }


             count++;
           }
         }
       }

      // console.log(numeroNatural)
/*
console.log(
  "numbers: " + numbers[n] +
  "  arr: " + phraseTokens[z] +
  " unidadesSimples: " + unidadesSimples[u] +
  " z: " + z +
  " count: " + count +
  " numbers: " + n +
  " BOOLEAN : {"
  + (numbers[n] === phraseTokens[z]) + "}" +
  " unidades: {" + u + "}" +
  " newarr {" + newarr + "}" +
  "}"
)
*/

       //                     if(numbers[n] === expressaux[n]){
       //
                   //       }
                 //       }

       //let line = coma[0]
       //console.log(line)
      // console.log(exparr[1])
       //console.log(exparr[2])

       rl.close()

      });
