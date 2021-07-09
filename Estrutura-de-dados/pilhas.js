var elementos = [];
var topo = -1;
const MAX = 10;

function push(num) {
  if(topo < MAX) {
    elementos.push(num)
    topo = topo + 1;
    elementos[topo] = num;
  }else{
    console.log("Pilha está cheia!")
  }
}

function pop() {
  if(topo != -1) {
    let num = elementos[topo];
    topo = topo - 1;
    return num;
  }
  else {
    console.log("Pilha está vazia");
  }
}

push(10);
push(20);
push(30);

console.log(elementos)

console.log(pop())

function estaVazia() {
  return -1;
}

//----- parte do código que usa a pilha -----------//
//Convertendo decimal para binário:
var numDecimal = 10;
var resto;
while(numDecimal != 0) {
  resto = parseInt(numDecimal % 2);
  push(resto)
  console.log(resto)
  numDecimal = parseInt(numDecimal/2);
}

while(!estaVazia()) {
  console.log(pop())
}



