//Exercicio 1 - FizzBuzz
//Divisivel por 3 - Fizz
//Divisivel por 5 - Buzz
//Por 3 e 5 - FizzBuzz
//Se não for um número - Não é um número
//Se não for divisivel nem por e nem por 5 - Entrada

function fizzBuzz(entrada) {
  if(typeof entrada != 'number'){
    return 'Não é um número';
  }
  if(entrada % 3 == 0 && entrada % 5 == 0) {
    return "FizzBuzz";
  } else if (entrada % 5 == 0) {
    return "Buzz";
  } else if (entrada % 3 == 0){
    return "Fizz"
  } else if( !entrada % 5 ==0 && !entrada % 3 ==0 ) {
    return entrada;
  }
}

let resultado = fizzBuzz(15)
console.log(resultado)