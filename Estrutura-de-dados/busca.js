var valores = [5,8,10,22,45,38];

function busca(num){
  for(i=0; i<6; i++) {
    if (num == valores[i]){
      return  `O valor está na posição ${i}`;
    }
  }
  return "Não existe esse valor no vetor" ;
}

//usando a nossa ferramenta de busca
console.log(busca(10));
console.log(busca(50));


