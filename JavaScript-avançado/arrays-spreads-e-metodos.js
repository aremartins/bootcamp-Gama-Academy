const alunasGama = ['Aretha', 'Rebecca', 'Larissa'];

console.log(alunasGama)

//Operador spread(...)
const alunasXp = [...alunasGama, 'Priscila'];
//Vai retornar os valores de alunasGama + o
console.log(alunasXp);

//Métodos de iteração:
for(let i = 0; i < alunasXp.length; i++) {
  console.log(alunasXp[i])
}

console.log("Iterando com map");
alunasXp.map(aluna => {
  console.log(aluna)
})

console.log("Método Filter");
const numeros = [34,25,36,78,97,81,13];
console.log(numeros);
console.log("Imprimindo somente os ímpares com método Filter");
const impares = numeros.filter(numero => numero % 2 != 0);
console.log(impares);
console.log("Imprimindo somente os pares com método Filter");
const pares = numeros.filter(numero => numero % 2 == 0);
console.log(pares);
console.log("Imprimindo somente os divisiveis por 3 com método Filter");
const multiplos3 = numeros.filter(numero => numero % 3 == 0);
console.log(multiplos3);

//Sort
//Se não atribuir para outra variável o sort altera o array original, ele nao cria um novo array, ele altera
console.log( 'Método sort')

const numerosOrdenadosCrescentes = numeros.sort();
console.log(numerosOrdenadosCrescentes);

const numerosOrdenadosDecrescentes = numeros.sort((a,b)=> b-a);
console.log(numerosOrdenadosDecrescentes)

//reduce - reduz o array a um resultado de uma operação matemática
console.log("Reduce");
const numbers =[1,34,25];
//Vai somar todos os itens + 5, se não passar nenhum valor inicial ou 0 soma so os valores do array
const soma = numbers.reduce((valorAnterior, valorAtual)=> {
  return valorAnterior + valorAtual;
},5)

console.log(soma);



