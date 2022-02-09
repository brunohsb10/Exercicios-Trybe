// 4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso,
//  escreva um algoritmo que retorne o maior número primo entre 0 e 50.

let maiorPrimo = 0;
for(let numero = 1; numero <= 50;numero+=1){
    let Primo =true;
    for(let divisor = 2;divisor < numero;divisor+=1){
        if(numero % divisor ===0){
         Primo = false
        }
        } 
        if(Primo){
          maiorPrimo = numero
          }
            
        }
        console.log(maiorPrimo);
    




        let player = {
           name: 'Marta',
           lastName: 'Silva',
           age : 34,
        }
let nomeCompletoEIdade = player[3];

console.log(player.name['lastName']);
