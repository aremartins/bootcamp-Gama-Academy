const livros = require('./database');
//Acessar dados em estruturas de dados como array de objetos
//Utilizar métodos de iteração filter e sort
//Inicializar projeto node com npm init
//Instalar depedência pelo node

//utilizamos a biblioteca readline para simular um input
//criamos um database para simular um arquivo json
//Se for sim, mostra as categorias e pergunta qual categoria
//Se não, mostra todos os livros em ordem crescente pela qtd de páginas
const readline = require('readline-sync');

const entradaInicial = readline.question('Deseja buscar um livro?S/N ');
if(entradaInicial.toLocaleLowerCase() == 's') {
  console.log("Essas são as categorias disponíveis:");
  console.log('Tecnologia', '/Soft skills', '/Data Science','/Produtividade');

  const entradaCategoria = readline.question('Qual categoria você escolhe?');

  const retorno = livros.filter(livro => livro.categoria == entradaCategoria);

  console.table(retorno)
} else {
  const livrosOrdenados = livros.sort((a, b)=> a.paginas - b.paginas)
  console.log("Essas são todas os livros disponíveis");
  console.table(livrosOrdenados);
}



