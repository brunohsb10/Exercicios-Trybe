let cor = document.getElementById('elementoOndeVoceEsta').parentNode
cor.style.color = 'blue';

let filho = document.getElementById('primeiroFilho');
filho.innerText ='ola';

let paifilho = document.getElementById('pai').firstChild;

let filhodopai = document.getElementById('elementoOndeVoceEsta').firstChild


let proximoNo =document.getElementById('elementoOndeVoceEsta').nextSibling 



let irmao = document.createElement('h1');


cor.appendChild(irmao)
irmao.innerText = 'eu sou zica';

let primogenito = document.getElementById('elementoOndeVoceEsta')

let primog = document.createElement('ul')

primogenito.appendChild(primog)
primogenito.innerText = 'vamo que vamo'
primogenito.style.background = 'red'