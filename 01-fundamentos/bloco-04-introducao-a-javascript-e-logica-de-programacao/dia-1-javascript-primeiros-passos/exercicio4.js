// Faça um programa que, dado um valor definido numa
//  constante, retorne "positive" se esse valor for
//  positivo, "negative" se for negativo e "zero" caso contrário.

const numero =10;

switch (numero){
  case numero >= 0:
    console.log("positive");
    break;
  case numero <= 0:
    console.log("negative");
    break;
  default:
    console.log("zero");
}
