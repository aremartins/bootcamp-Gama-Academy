
var letra = prompt('Digite uma letra')
var jogar = document.getElementById('jogar');
jogar.addEventListener('click', jogarForca)


function jogarForca(letra){
forca(letra);
}


function forca(a){ 
  var palavra =['a','c', 'u', 'c','a','r'] 
  var chutes =[]
  var tentativas = 3;
  for(i =0; i <7; i++){
  if(a == palavra[i]){
    chutes.push(a);
    console.log( "Certo");
    a = prompt('Digite outra letra')
  } else {  
    console.log( "letra errada ");
    tentativas -1;
  }
}
}



