const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//items 10 20 30 40 50 60 70 80 90 100
function reverseObject(object) {
  var newObject = {};
  var keys = [];
  for (var key in object) {
      keys.push(key);
  }

  for (var i = keys.length - 1; i >= 0; i--) {
    var value = object[keys[i]];
    newObject[keys[i]]= value;
  }

    return newObject;
}

  rl.question(' Digite uma sequência numérica ', (str) => {
       let numbers = {0:"zero",1:"uma",2:"duas",3:"três",4:"quatro",5:"cinco",6:"seis",7:"sete",8:"oito",9:"nove"}
       let unidadesSimples = ["unidades","dezenas", "centenas"]
       let unidadesPlural = ["unidade","dezena", "centena"]
       let expression = []
       let coma = []
       let expressaux = []
       let result = []
       let numeroNatural = []
       let OrderTokens = []
       let orderedTokens = []
       let compareTokens = []
       let newtransformedToken = []
    //   str = "nove centenas mais seis dezenas mais oito unidades"
       str = "uma centena mais uma dezena mais uma unidade"

       clientPhrase = str.split(" ")
       let phraseTokens = clientPhrase.filter(e => e !== "mais")

       for(let c = 0; c < phraseTokens.length;c++){
         if(c === 0){
           OrderTokens[c] = phraseTokens[c] + " " + phraseTokens[c+1]
           compareTokens[c] = phraseTokens[c]
         }
         else if(c > 0){
           OrderTokens[c] = phraseTokens[c+1] + " " + phraseTokens[c+2]
           compareTokens[c] = phraseTokens[c]
         }

         if(OrderTokens[c].indexOf("undefined") === -1){
           orderedTokens[c] = OrderTokens[c]
           compareTokens[c] = phraseTokens[c]
         }

       }


      //{0:["nove", "centenas"], 1:["seis","dezenas"], 2:["oito", "unidades"]}
       console.log("compare tokens :")
       console.log(compareTokens)
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
                if(orderedTokens[o] === primaryToken
                  && compareTokens[n] === phraseTokens[z] &&
                  phraseTokens[z] !== "dezenas" &&
                  phraseTokens[z] !== "centenas" &&
                  phraseTokens[z] !== "unidades" &&
                  phraseTokens[z] !== "dezena" &&
                  phraseTokens[z] !== "centena" &&
                  phraseTokens[z] !== "unidade"
                ){
                  console.log(
                    "numbers: " + numbers[n] + "\n" +
                    " phrTokens: " + phraseTokens[z] + "\n" +
                    " z : {" + z + "}" + "\n" +
                    " pToken : {" + primaryToken  + "} " + "\n" +
                    " ordTokens : {" + orderedTokens[o] + "}" + "\n" +
                    " o : {" + o + "}" + "\n" +
                    " orderCount : {" + orderCount + "} " + "\n" +
                    " compareTokens: {" + compareTokens[n] + "}" + "\n" +
                    " numbers[" + numbers[n] + "] === comparedTokens[" + compareTokens[n] + "]" + "\n" +
                    "}")
                     //numeroNatural.push(n)
                     orderCount++

                       result.push(phraseTokens[z])
          //             numeroNatural.push(n)
                       newtransformedToken.push(orderedTokens[o])
                     //console.log(o);
                }
             count++;
           }
         }
         //controla e limita a exibição de casas decimais em apenas três [unidade,dezenas,centenas]
         if(orderCount >= 3){ break }
         //if(n === n){ break;}
       }

       console.log(result)
       //console.log(newtransformedToken)


         for(var r in result){
           for(var n in numbers){
           if(numbers[n] === result[r])
             numeroNatural.push(n)
           //console.log("numbers: " + numbers[n] + " result:" +  result[r])
         }
       }

       console.log(numeroNatural.join(''))

       //a ordem de organização dos tokens numéricos é segundo
       //uma ordem ascendente do objeto numbers
       //ou seja, a ordem dos tokens será de 0,1,2,3,4...
       //se vc colocar um numero como 968
       //o array retornará 689 {por que ele ordenou segundo uma lista
      // ascendente}
      /*
       let transformedNumber = []
       for(i =0; i <= orderedTokens.length; i++){
         if(orderedTokens[i]){
           console.log(numeroNatural[i]);
           console.log(orderedTokens[i]);
           //transformedNumber.push(numeroNatural[i])
         }
       }
*/
       //console.log(transformedNumber)

       rl.close()

      });
