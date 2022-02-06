// 3- Considere o array de strings abaixo:
let array = ["java", "javascript", "python", "html", "css"];
// Escreva dois algoritmos: um que retorne a maior palavra deste array e



// let biggestWord = array[0];

// for (let index = 0; index < array.length; index += 1) {
//   if (array[index].length > biggestWord.length) {
//     biggestWord = array[index];
//   }
// }
// console.log(biggestWord);

//  outro que retorne a menor. Considere o número de caracteres de cada palavra.

let smallestWord = array[0];
for (let index = 0; index < array.length; index += 1) {
  if (array[index].length < smallestWord.length) {
    smallestWord = array[index];
  }
}

console.log(smallestWord);

